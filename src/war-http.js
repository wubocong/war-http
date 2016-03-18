'use strict';
import http from 'http';
import url from 'url';
import https from 'https';
import querystring from 'querystring';

function request(address, option, callback, data = {}) {
  let postData = querystring.stringify(data);
  let uri = address;
  if (address.search(/\/\//) === 0) {
    uri = 'http:' + uri;
  } else
  if (address.search(/https?:\/\//) !== 0) {
    uri = 'http://' + uri;
  }
  option.headers['Content-Length'] = postData.length;
  const options = {...url.parse(address),
    ...option
  };

  function operate(res) {
    let body = '';
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('end', function() {
      callback(res, body);
    });
  }
  let protocol;
  if (address.search(/https:\/\//) === 0) {
    protocol = https;
  } else {
    protocol = http;
  }
  const req = protocol.request(options, operate);
  if (options.method.search(/(POST|PUT)/i) >= 0) {
    req.write(postData);
  }
  req.end();
}
export default request;