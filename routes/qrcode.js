var qr = require('qr-image');

var express = require('express');
var router = express.Router();

router.get('/qrcode/create',
function(req, res) {
    var text = req.query.text;
    var img = qr.image(text,{'size' : 15, 'margin' : 1});
	res.writeHead(200, {'Content-Type': 'image/png'});
	img.pipe(res);
});

module.exports = router;