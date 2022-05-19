const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51L0yVYAumYmZMfpEZLCknbPMQulelYG1tlNmbp249C60M3OdcDVfLQ7Ik6wafZDZZwofbJEYyjtT1bpNW3rqrsIw00sTwi6PZV')

//API

//App config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "cad",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listen command



exports.api = functions.https.onRequest(app)