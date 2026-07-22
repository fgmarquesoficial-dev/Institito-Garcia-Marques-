from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import re

router = APIRouter()


# Modelo de Contact
class ContactCreate(BaseModel):
    name: str = Field(..., min_length=3, max_length=100, description="Nome completo")
    email: EmailStr = Field(..., description="E-mail do contato")
    phone: Optional[str] = Field(None, max_length=20, description="Telefone (opcional)")
    message: str = Field(..., min_length=10, max_length=1000, description="Mensagem")


# Validação de telefone brasileiro
def validar_telefone_brasileiro(telefone: str) -> bool:
    if not telefone:
        return True  # Telefone é opcional
    numeros = re.sub(r'\D', '', telefone)
    return len(numeros) >= 10 and len(numeros) <= 11


@router.post("/contact", response_model=dict)
async def criar_mensagem(contact: ContactCreate):
    """
    Cria uma nova mensagem de contato no Supabase
    """
    from server import supabase

    # Validação adicional de telefone (se fornecido)
    if contact.phone and not validar_telefone_brasileiro(contact.phone):
        raise HTTPException(
            status_code=400,
            detail="Telefone inválido. Use formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX"
        )

    contact_dict = contact.model_dump()
    contact_dict["status"] = "pending"

    try:
        result = supabase.table("contacts").insert(contact_dict).execute()
        return {
            "success": True,
            "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
            "contact_id": result.data[0]["id"] if result.data else None
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
    from server import supabase
    result = supabase.table("contacts").select("id", count="exact").execute()
    return {"total_contacts": result.count}


@router.get("/contacts")
async def listar_mensagens(limit: int = 50, skip: int = 0):
    """
    Lista as mensagens de contato (para admin/dashboard futuro)
    """
    from server import supabase
    result = (
        supabase.table("contacts")
        .select("*")
        .order("created_at", desc=True)
        .range(skip, skip + limit - 1)
        .execute()
    )
    count_result = supabase.table("contacts").select("id", count="exact").execute()

    return {
        "contacts": result.data,
        "total": count_result.count
    }
