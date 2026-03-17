from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, timezone
from typing import Optional
import uuid
import re

router = APIRouter()

# Modelo de Contact
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=3, max_length=100, description="Nome completo")
    email: EmailStr = Field(..., description="E-mail do contato")
    phone: Optional[str] = Field(None, max_length=20, description="Telefone (opcional)")
    message: str = Field(..., min_length=10, max_length=1000, description="Mensagem")

class Contact(ContactCreate):
    id: str
    created_at: str
    status: str = "pending"  # pending, read, replied

# Validação de telefone brasileiro
def validar_telefone_brasileiro(telefone: str) -> bool:
    if not telefone:
        return True  # Telefone é opcional
    # Remove caracteres não numéricos
    numeros = re.sub(r'\D', '', telefone)
    # Valida se tem entre 10 e 11 dígitos (com ou sem DDD)
    return len(numeros) >= 10 and len(numeros) <= 11

@router.post("/contact", response_model=dict)
async def criar_mensagem(contact: ContactCreate):
    """
    Cria uma nova mensagem de contato
    """
    from server import db
    
    # Validação adicional de telefone (se fornecido)
    if contact.phone and not validar_telefone_brasileiro(contact.phone):
        raise HTTPException(
            status_code=400, 
            detail="Telefone inválido. Use formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX"
        )
    
    # Cria o objeto de contato
    contact_dict = contact.model_dump()
    contact_dict["id"] = str(uuid.uuid4())
    contact_dict["created_at"] = datetime.now(timezone.utc).isoformat()
    contact_dict["status"] = "pending"
    
    # Salva no MongoDB
    try:
        await db.contacts.insert_one(contact_dict)
        
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "contact_id": contact_dict["id"]
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao salvar mensagem: {str(e)}"
        )

@router.get("/contacts/count")
async def contar_mensagens():
    """
    Retorna o número total de mensagens recebidas
    """
    from server import db
    count = await db.contacts.count_documents({})
    return {"total_contacts": count}

@router.get("/contacts")
async def listar_mensagens(limit: int = 50, skip: int = 0):
    """
    Lista as mensagens de contato (para admin/dashboard futuro)
    """
    from server import db
    
    contacts = await db.contacts.find(
        {}, 
        {"_id": 0}
    ).sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
    
    return {
        "contacts": contacts,
        "total": await db.contacts.count_documents({})
    }
