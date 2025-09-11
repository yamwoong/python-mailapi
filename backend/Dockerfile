# Use a lightweight Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for layer caching
COPY package*.json ./

# Install dependencies using package-lock.json
RUN npm ci

# Copy all remaining application files
COPY . .

# Expose the backend API port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]