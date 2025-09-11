# tests/test_health.py

import pytest
from fastapi import FastAPI
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_health_check():
    """
    Test the /health endpoint to ensure it returns 200 OK and valid payload.
    """
    async with AsyncClient(base_url="http://localhost:8000") as ac:
        response = await ac.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert "time" in response.json()
    assert "host" in response.json()
