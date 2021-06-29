const submitDisputeResponse = `{
  "disputeOutput":{
     "amountOfMoney":{
        "amount":1000,
        "currencyCode":"EUR"
     },
     "contactPerson":"Wile E. Coyote",
     "creationDetails":{
        "disputeCreationDate":"20190110110750"
     },
     "emailAddress":"wile.e.coyote@acmelabs.com",
     "files":[
        {
           "fileName":"BoomYouDidIt.jpg",
           "fileSize":"52631",
           "fileType":"image/jpeg",
           "id":"d3BjLWRpc3B1dGU6MDAwMDAwMTcwMTAwMDAxOTkxMDEwMDAwMTAwMDAxOkJvb21Zb3VEaWRJdC5qcGc="
        },
        {
           "fileName":"balloons.png",
           "fileSize":"111193",
           "fileType":"image/png",
           "id":"d3BjLWRpc3B1dGU6MDAwMDAwMTcwMTAwMDAxOTkxMDEwMDAwMTAwMDAxOmJhbGxvb25zLnBuZw=="
        }
     ],
     "reference":{
        "merchantOrderId":"123456",
        "paymentReference":"0",
        "providerId":"1000000071"
     },
     "replyTo":"wile.e.coyote@acmelabs.com",
     "requestMessage":"This message supports the dispute request."
  },
  "id":"1107",
  "paymentId":"000000170100001991010000100001",
  "status":"CREATED",
  "statusOutput":{
     "isCancellable":true,
     "statusCode":600,
     "statusCodeChangeDateTime":"20190125060706"
  }
}`;

export const getSubmitDisputeResponse = (disputeId) => {
  const JSONObject  = JSON.parse(submitDisputeResponse);

  JSONObject.id = disputeId;
  return JSONObject;
};