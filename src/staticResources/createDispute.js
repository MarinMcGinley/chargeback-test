const createDisputeResponse = `{
  "disputeOutput" : {
      "amountOfMoney" : {
          "amount" : 1234,
          "currencyCode" : "EUR"
      },
      "contactPerson" : "Wile E. Coyote",
      "creationDetails" : {
          "disputeCreationDate" : "20181218035202"
      },
      "emailAddress" : "wile.e.coyote@acmelabs.com",
      "files" : [ ],
      "reference" : {
          "merchantOrderId" : "123456",
          "paymentReference" : "0",
          "providerId" : "1000000071",
          "providerReference" : "null"
      },
      "replyTo" : "wile.e.coyote@acmelabs.com",
      "requestMessage" : "This is the message from the merchant to GlobalCollect"
  },
  "id" : "821",
  "paymentId" : "000000170100001958950000100001",
  "status" : "DRAFT",
  "statusOutput" : {
      "isCancellable" : false,
      "statusCode" : 500,
      "statusCodeChangeDateTime" : "20181218035202"
  }
}`;

export const getCreateDisputeResponse = (paymentId) => {
  const JSONObject  = JSON.parse(createDisputeResponse);

  JSONObject.paymentId = paymentId;
  return JSONObject;
};