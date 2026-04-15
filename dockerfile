# SO com node instaldo
FROM node:24-alpine

# Será a pasta que o app vai morar dentro do container
WORKDIR /app

# Copia os arquivos de dependencias e instala
COPY package*.json ./
RUN npm install

# Copia o resto do codigo fonte
COPY . .

# Porta usada
EXPOSE 3000

# Comando para ligar a aplicação
CMD ["npm", "start"]