# app/routers/health.py

from fastapi import APIRouter
from datetime import datetime, timezone
import socket

router = APIRouter()

@router.get("/health")
def health_check():
    """
    Health check endpoint for service monitoring.

    Returns:
        JSON object including service name, host machine, and UTC timestamp.
    """
    return {
        "status": "ok",
        "service": "python-mail",
        "host": socket.gethostname(),
        "time": datetime.now(timezone.utc).isoformat()
    }