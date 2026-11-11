FROM node:26-alpine

RUN npm install --global corepack &&  corepack install --global yarn@stable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

WORKDIR /app/website
RUN chown node:node /app/website
USER node

EXPOSE 3000

COPY --chown=node:node website/ /app/website

RUN yarn --version && yarn install --immutable

CMD ["yarn", "start", "--host", "0.0.0.0"]
