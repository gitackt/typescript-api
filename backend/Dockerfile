FROM node:14.5.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
COPY . .

ARG GOOGLE_APPLICATION_CREDENTIALS

ENV NODE_ENV=production
ENV TYPEORM_SEEDING_FACTORIES=src/factories/**/*{.ts,.js}
ENV TYPEORM_SEEDING_SEEDS=src/seeds/**/*{.ts,.js}
ENV GOOGLE_APPLICATION_CREDENTIALS=${GOOGLE_APPLICATION_CREDENTIALS}

RUN ./node_modules/.bin/tsc --build tsconfig.json

CMD ["node", "build/src/index.js"]
