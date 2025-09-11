# app/main.py

from fastapi import FastAPI
from app.routers.health import router as health_router
from app.core.config import settings

def create_app() -> FastAPI:
    """
    Factory function to create and configure the FastAPI app.

    Returns:
        FastAPI: Fully configured application instance.
    """
    app = FastAPI(
        title=settings.APP_NAME
    )

    # Register router(s)
    app.include_router(health_router)

    return app

# FastAPI expects an 'app' variable to run
app = create_app()