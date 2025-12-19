# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
