# Base Image
FROM node:26-alpine

# Set the working Directoy inside the Docker
WORKDIR /app

# Copy and install the Dependencies
COPY package*.json .
RUN npm install

# Copy the Whole Code into Docker Container
COPY . .

# Copy Prisma Schema and Generate Client
COPY prisma ./prisma/
RUN npx prisma generate

# Build the Code
RUN npm run build

# Expose the Port
EXPOSE 3000

# Start the Application
CMD ["npm", "start"]