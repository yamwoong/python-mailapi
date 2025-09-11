# app/core/config.py

from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    """
    Application settings loaded from environment variables or defaults.
    """
    APP_NAME: str = "python-mail"
    ENV: str = "development"

# Global instance to be used in the app
settings = Settings()
