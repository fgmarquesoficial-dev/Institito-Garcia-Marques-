from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.responses import FileResponse
import os
import re

router = APIRouter()

# Modelo de Lead
class LeadCreate(BaseModel):
    nome: str = Field(..., min_length=3, max_length=100)
    telefone: str = Field(..., min_length=10, max_length=20)
    email: EmailStr

class Lead(LeadCreate):
    id: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    pdf_downloaded: bool = False

# Validação de telefone brasileiro
def validar_telefone_brasileiro(telefone: str) -> bool:
    # Remove caracteres não numéricos
    numeros = re.sub(r'\D', '', telefone)
    # Valida se tem entre 10 e 11 dígitos (com ou sem DDD)
    return len(numeros) >= 10 and len(numeros) <= 11

@router.post("/leads", response_model=dict)
async def criar_lead(lead: LeadCreate):
    """
    Cria um novo lead e retorna o link para download do PDF
    """
    from server import db
    
    # Validação adicional de telefone
    if not validar_telefone_brasileiro(lead.telefone):
        raise HTTPException(
            status_code=400, 
            detail="Telefone inválido. Use formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX"
        )
    
    # Verifica se o email já existe
    existing_lead = await db.leads.find_one({"email": lead.email})
    if existing_lead:
        # Retorna o PDF mesmo assim (lead já cadastrado)
        return {
            "message": "E-mail já cadastrado. Download liberado!",
            "pdf_url": "/api/download-pdf",
            "already_registered": True
        }
    
    # Cria o lead
    lead_dict = lead.dict()
    lead_dict["created_at"] = datetime.utcnow()
    lead_dict["pdf_downloaded"] = False
    
    result = await db.leads.insert_one(lead_dict)
    
    # Marca como downloaded
    await db.leads.update_one(
        {"_id": result.inserted_id},
        {"$set": {"pdf_downloaded": True}}
    )
    
    return {
        "message": "Lead cadastrado com sucesso!",
        "pdf_url": "/api/download-pdf",
        "lead_id": str(result.inserted_id)
    }

@router.get("/download-pdf")
async def download_pdf():
    """
    Retorna o PDF para download
    """
    pdf_path = os.path.join(
        os.path.dirname(__file__), 
        "static", 
        "8-perguntas-que-merecem-sua-atencao.pdf"
    )
    
    if not os.path.exists(pdf_path):
        raise HTTPException(status_code=404, detail="PDF não encontrado")
    
    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="8-Perguntas-que-Merecem-Sua-Atencao.pdf"
    )

@router.get("/leads/count")
async def contar_leads():
    """
    Retorna o número total de leads cadastrados
    """
    from server import db
    count = await db.leads.count_documents({})
    return {"total_leads": count}
