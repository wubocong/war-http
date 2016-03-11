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
request(url,method,function(res){});
```

## Example

```javascript
//test.js
var request=require('war-http');
request('https://www.baidu.com','GET',function(res){
	console.log(res);
});
```

then

```bash
node test
```
