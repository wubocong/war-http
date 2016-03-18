[![NPM version](https://img.shields.io/npm/v/war-http.svg?style=flat)](https://npmjs.org/package/war-http)
[![Build Status](https://img.shields.io/travis/wubocong/war-http.svg?style=flat)](https://travis-ci.org/wubocong/war-http)
[![Coverage Status](https://img.shields.io/coveralls/wubocong/war-http.svg?style=flat)](https://coveralls.io/r/wubocong/war-http)
[![NPM downloads](http://img.shields.io/npm/dm/war-http.svg?style=flat)](https://npmjs.org/package/war-http)
# war-http

Yet another simple HTTP/HTTPS request module of Node.js

## Author

[Warrior!](https://wubocong.com)

## Usage

```bash
npm install --save war-http
```

```javascript
var request=require('war-http');
request(url,options,function(head,body){},postData);
```

## Example

```javascript
//test.js
var request=require('war-http');
var options = {
  method: 'POST',
  headers: {
    'User-Agent': '',
    'Referer': 'https://www.taobao.com',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  }
};
var data = {
  'foo': 'bar'
};
request('https://www.baidu.com',options,function(head,body){
	console.log(body);
});
```

then

```bash
node test
```
