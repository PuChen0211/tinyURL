/**
 * Created by puchen on 8/12/16.
 */
var express = require('express');
var router = express.Router();
var uslService = require('../services/urlService');

//slice a short url and map it to long version
router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = uslService.getLongUrl(shortUrl, req.app.shortToLongHash);
    res.redirect(longUrl);
});

module.exports = router;