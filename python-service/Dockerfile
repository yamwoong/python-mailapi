# -------------------------------
# Step 1: Base image
# -------------------------------
FROM python:3.11-slim

# -------------------------------
# Set working directory
# -------------------------------
WORKDIR /app

# -------------------------------
# Install dependencies
# -------------------------------
# Copy requirement file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# -------------------------------
# Copy application files
# -------------------------------
COPY app ./app

# -------------------------------
# Run FastAPI server
# -------------------------------
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
