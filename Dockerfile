# Use the official Node.js image as the base image
FROM node:14 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Build the production-ready React app
RUN npm run build

# Use a lightweight HTTP server to serve the app
FROM nginx:alpine

# Copy the built files from the builder stage to the nginx server
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the nginx server
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
