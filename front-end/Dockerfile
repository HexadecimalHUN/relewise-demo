# Install dependencies and build
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production image
FROM node:18-alpine as runner

WORKDIR /app

COPY --from=builder /app ./

# Start the app using 'next start'
CMD ["npm", "run", "start"]