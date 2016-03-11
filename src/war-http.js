import http from 'http';
import url from 'url';
import https from 'https';

function request(address, method, callback) {
  let uri = address;
  if (address.search(/\/\//) === 0) {
    uri = 'http:' + uri;
  } else
  if (address.search(/https?:\/\//) !== 0) {
    uri = 'http://' + uri;
  }
  const options = url.parse(address);
  options.method = method;

  function operate(res) {
    let body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      callback(res, body);
    });
  }
  if (address.search(/https:\/\//) === 0) {
    https.request(options, operate).end();
  } else {
    http.request(options, operate).end();
  }
}
export default request;