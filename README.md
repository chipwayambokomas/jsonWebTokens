# jsonWebTokens

In this project I learnt how to use jsonWebTokens to identify a user trying to access a specific route, provide said user with authorization and veryify said authorization. I was provided with the frontend, mine was to focus on the development on the backend. This allows me to develop projects where I can provide security of data to clients which in today's world is a basic need.

## What I Learned

* I learnt what a jsonWebKey is as well as it's parts being the Header, Payload and signitaure.
* I learnt how to create a key and store it's signature in a secret file.
* I learnt how to access the Payload of a request so it's contents can be fetched from a database.
* I learnt how to test for authorization and verify it's presence and value.

## Dependencies
    * "dotenv": "^8.2.0",
    * "express": "^4.17.1",
    * "express-async-errors": "^3.1.1",
    * "http-status-codes": "^2.1.4",
    * "jsonwebtoken": "^8.5.1",
    * "nodemon": "^2.0.7"
