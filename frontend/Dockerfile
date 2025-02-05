# Frontend Dockerfile
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the correct Vite development server port
EXPOSE 3000

# Set the default command
CMD ["npm", "run", "dev"]
