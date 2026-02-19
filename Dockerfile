FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile || yarn install

COPY . .
RUN yarn build

EXPOSE 8080

CMD ["yarn", "preview", "--host", "0.0.0.0", "--port", "8080"]
