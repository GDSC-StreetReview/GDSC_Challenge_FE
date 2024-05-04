# Stage 1: Build the React app
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
COPY /home/semtle/ssl/ ./
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY domain.crt /etc/nginx/domain.crt
COPY domain.key /etc/nginx/domain.key
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
