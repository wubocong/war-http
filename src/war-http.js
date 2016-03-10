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
  if (address.search(/https:\/\//) === 0) {
    https.request(options, callback).end();
  } else {
    http.request(options, callback).end();
  }
}
export default request;
