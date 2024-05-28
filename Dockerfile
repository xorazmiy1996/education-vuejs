FROM node:lts-alpine AS build

# Install http-server globally
RUN npm install -g http-server

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use the official Nginx image as the base image for the production stage
FROM nginx:stable-alpine AS production-stage

# Copy the build output from the build stage to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]






# FROM node:lts-alpine

# WORKDIR /app


# COPY package*.json ./


# RUN npm install

# COPY . .


# RUN npm run build

# # Use the official Nginx image to serve the static files
# FROM nginx:alpine

# # Copy the build output to the Nginx html directory
# COPY --from=0 /app/dist /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]








# # FROM node:lts-alpine

# # # install simple http server for serving static content
# # RUN npm install -g http-server

# # # make the 'app' folder the current working directory
# # WORKDIR /app

# # # copy both 'package.json' and 'package-lock.json' (if available)
# # COPY package*.json ./

# # # install project dependencies
# # RUN npm install

# # # copy project files and folders to the current working directory (i.e. 'app' folder)
# # COPY . .

# # # build app for production with minification
# # RUN npm run build

# # EXPOSE 8080
# # CMD [ "http-server", "dist" ]
