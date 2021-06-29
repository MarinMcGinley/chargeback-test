const submitFileResponse = `{
  "disputeId" : "1234",
  "fileId" : "sample_ref"
}`;

export const getSubmitFileResponse = (disputeId) => {
  const JSONObject  = JSON.parse(submitFileResponse);

  JSONObject.disputeId = disputeId;
  JSONObject.fileId = Math.floor(Math.random() * 10000000);
  return JSONObject;
};