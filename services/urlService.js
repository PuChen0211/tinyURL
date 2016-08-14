/**
 * Created by puchen on 8/13/16.
 */
var genCharArray = function (charA, charZ) {
    var arr = [];
    for (var i = charA.charCodeAt(0), j = charZ.charCodeAt(0); i <= j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

var encode = [];
encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));

var decode = {};
for (var i = 0; i < encode.length; i++) {
    decode[encode[i]] = i;
}

//'0' to '9', 'a' - 'z' and 'A' to 'Z'
var convertTo62 = function ( num ) {
    var result = '';
    do {
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num);
    return result;
};

var generateShortUrl = function (longToShortHash) {
    return Object.keys(longToShortHash).length;
};

var generateShortUrlV2 = function (longToShortHash) {
    return convertTo62(Object.keys(longToShortHash).length);
};

var getShortUrl = function (longUrl, longToShortHash, shortToLongHash) {
    if ( longUrl.indexOf('http') === -1) {
        longUrl = "http://" + longUrl;
    }
    if (longToShortHash[longUrl] != null) {
        return longToShortHash[longUrl];
    } else {
        var shortUrl = generateShortUrl(longToShortHash);
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

var getLongUrl = function (shortUrl, shortToLongHash) {
    return shortToLongHash[shortUrl];
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};