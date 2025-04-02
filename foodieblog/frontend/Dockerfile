# Use a base image with Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 3000

# Start nginx
CMD ["nginx", "-g", "daemon off;"]