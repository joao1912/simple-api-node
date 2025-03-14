FROM public.ecr.aws/docker/library/node:lts

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 80

CMD [ "npm", "start" ]