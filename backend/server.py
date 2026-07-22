from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Conexão com o Supabase (mesma conta usada no SOH Assessment).
# SUPABASE_URL: URL do projeto (ex: https://xxxx.supabase.co)
# SUPABASE_KEY: use a "service_role key" aqui (fica só no servidor, nunca no frontend).
supabase_url = os.environ['SUPABASE_URL']
supabase_key = os.environ['SUPABASE_KEY']
supabase: Client = create_client(supabase_url, supabase_key)

# Cria o app principal, sem prefixo
app = FastAPI()

# Cria um router com o prefixo /api
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


# Importa e inclui o router de leads
from routes.leads import router as leads_router
api_router.include_router(leads_router)

# Importa e inclui o router de contatos
from routes.contacts import router as contacts_router
api_router.include_router(contacts_router)

# Inclui o router no app principal
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuração de logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
