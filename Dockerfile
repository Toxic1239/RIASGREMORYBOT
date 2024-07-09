FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Astropeda/Asta-Md /root/Astropeda

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Astropeda/node_modules

# Install dependencies
WORKDIR /root/Astropeda
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
