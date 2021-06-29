import { getCreateDisputeResponse } from './src/staticResources/createDispute.js';
import { getSubmitFileResponse } from './src/staticResources/submitFile.js';
import { getSubmitDisputeResponse } from './src/staticResources/submitDispute.js';

import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});


// CREATE DISPUTE
app.post('/v1/:merchantId/payments/:paymentId/dispute', (req, res) => {
  const merchantId = req.params.merchantId;
  const paymentId = req.params.paymentId;

  const response = getCreateDisputeResponse(paymentId);

  res.status(201);
  res.send(response);
});


// SUBMIT FILES
app.post('/files/v1/:merchantId/disputes/:disputeId', (req, res) => {
  const merchantId = req.params.merchantId;
  const disputeId = req.params.disputeId;

  const response = getSubmitFileResponse(disputeId)

  res.status(201);
  res.send(response);

});

// SUBMIT DISPUTE
app.post('/v1/:merchantId/disputes/:disputeId/submit', (req, res) => {
  const merchantId = req.params.merchantId;
  const disputeId = req.params.disputeId;

  const response = getSubmitDisputeResponse(disputeId);

  res.status(200);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});