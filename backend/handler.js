const requestHandler = (req, res) => {

  const { method, url } = req;
  let body = [];

  //always handle errors first
  //let's allow users to post something
  req.on('error', (err) => {
    console.error(err.stack);
  }).on('data', (chunk) => {
    //we parse the data from the request body
    //we receive data in chunks and push it into
    //our body array
    body.push(chunk);
    //we can chain onEvent methods in order of occurence
  }).on('end', () => {
    //we concatenate the body array into a string
    body = Buffer.concat(body).toString();
    //At this point, we have
      //headers
      //http method
      //the url
      //and the request body data
      //We can now handle the request.
  })



  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<html><body><h1>I\'m learning Node.js</h1></body></html>');
}

module.exports = requestHandler