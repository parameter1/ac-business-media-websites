FROM node:14.21-alpine as build
WORKDIR /root
ENV NODE_ENV production

ADD package.json yarn.lock /root/
ADD packages /root/packages
ADD services/ironpros-product-specs /root/services/ironpros-product-specs
RUN yarn --production --frozen-lockfile

WORKDIR /root/services/ironpros-product-specs

FROM node:14.21-alpine
ENV NODE_ENV production
ENV PORT 80
COPY --from=build /root /root
WORKDIR /root/services/ironpros-product-specs
ENTRYPOINT [ "node", "src/index.js" ]
