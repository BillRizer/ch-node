FROM node

WORKDIR /app/

COPY package.* .

RUN npm install

COPY ./src ./src

RUN ls 

CMD ["npm","run","start"]
# CMD "/bin/bash"