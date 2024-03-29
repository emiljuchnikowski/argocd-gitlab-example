FROM node:16

ENV NODE_ENV=production
WORKDIR /home/node/app

COPY ./package* ./
RUN npm install --prefer-offline --no-audit && \
    npm cache clean --force

USER node

COPY index.js .

CMD ["node", "index.js"]