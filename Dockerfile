FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/DeeCeeXxx/Queen_Anita-V2 /root/DeeCeeXxx

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/DeeCeeXxx/node_modules

# Install dependencies
WORKDIR /root/DeeCeeXxx
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
