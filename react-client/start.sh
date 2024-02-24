#!/bin/bash

rm .env

sleep 30 

# Get the value of the USER environment variable
export SERVER_URL=$(curl http://169.254.169.254/latest/meta-data/public-ipv4)
SERVER_URL=$SERVER_URL
SERVER_PORT=$SERVER_PORT
PORT=$PORT
# Define the output file name
output_file=".env"

# Create or overwrite the .env file
echo "REACT_APP_API_URL=$SERVER_URL:$SERVER_PORT" >> "$output_file"
echo "PORT=$PORT" >> "$output_file"

# Print a message to confirm the creation of the .env file
echo "Created $output_file with variable=$SERVER_URL"

npm start


