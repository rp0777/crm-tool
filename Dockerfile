FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

EXPOSE 3000

# next js uses sharp to resize/optimize images
# RUN npm i sharp

RUN npm run build
# Start the Next.js application
CMD ["npm","run","start"]
