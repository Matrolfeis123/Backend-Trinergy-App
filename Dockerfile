FROM node:alpine

# Create app directory, where the app will be stored
WORKDIR /app 

# Copy package.json and package-lock.json to the app directory. The * is a wildcard, so it will copy both files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the files to the app directory
COPY . .

ENV PORT=8080

# Expose the port 8080
EXPOSE 8080

CMD ["npm", "start"]