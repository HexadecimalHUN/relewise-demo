FROM node:18

#Setting workdir
WORKDIR /app

#Copy package
COPY package*.json ./

#Install Dependencies
RUN npm install

#Copy the rest of the app
COPY . .

#Expose port for the app
EXPOSE 4000

#Start the app
CMD ["npm", "start"]