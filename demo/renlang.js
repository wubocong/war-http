var data = {
  'canvasstr': '1686769612',
  'voteid': 'McTxIpO0O0Oh'
};
var options = {
  method: 'POST',
  headers: {
    'User-Agent': '',
    'Referer': 'http://p.lonan.net/?from=groupmessage&isappinstalled=0',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  }
};
var ua = ['Mozilla/5.0 (Linux; Android 6.1; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.0.1 NetType/WIFI', 'Mozilla/5.0 (Linux; Android 6.1; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/4G', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.0.1 NetType/4G', 'Mozilla/5.0 (Linux; Android 6.1; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.1.3 NetType/WIFI', 'Mozilla/5.0 (Linux; Android 6.1; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/4G', 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.1.3 NetType/4G', 'Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.1.3 NetType/WIFI', 'Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36 MicroMessenger/6.0.2.56_r958800.520 NetType/4G', 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 MicroMessenger/6.1.3 NetType/4G']

function vote(options, data) {
  var request = require('../lib/war-http');
  request('http://p.lonan.net/index.php/vote/index/setnum/aid/1.html', options, function(head, body) {
    console.log(body);
  }, data);
}
setInterval(function() {
  var l = ua.length;
  for (var i = 0; i < l; i++) {
    options.headers['User-Agent'] = ua[i];
    vote(options, data);
    vote(options, data);
  }
}, 200);