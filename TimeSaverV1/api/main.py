from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Coinbase trading API online"}

@app.get("/balance")
def get_balance():
    # Replace this with actual Coinbase balance logic
    return {"balance": "0.2345 BTC"}
