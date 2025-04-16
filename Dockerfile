FROM node:18-alpine

# Create a non-root user
RUN adduser -D myuser

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Set the owner of the app directory to the non-root user
RUN chown -R myuser:myuser /usr/src/app

# Switch to the non-root user
USER myuser

# Expose the port the app listens on
EXPOSE 3000

# Run the application
CMD [ "node", "app.js" ]
