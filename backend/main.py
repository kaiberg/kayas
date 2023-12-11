from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from database.db_handler import CreateSecret
from database.db_connect import connect_db
import database.db_connect


class SecretCreate(BaseModel):
    maxReads: int | None = 1
    message: str
    expire: str | None = ""
    createOn: str | None = ""
    password: str | None = ""


#initiate db connect
database.db_connect.db_cursor = connect_db()

app = FastAPI()

@app.post("/api/create/")
async def api_create(item: SecretCreate):
    return CreateSecret(item)

if __name__ == "__main__":
   uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)