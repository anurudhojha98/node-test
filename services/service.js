const url = require('url');
module.exports = {
    async sampleRequest(req, res) {
        const reqUrl = url.parse(req.url, true);
        var qdata = reqUrl.query;
        let returnedStr = '';
        if (qdata.number) {
            returnedStr = await this.getOutputResp(qdata.number);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(returnedStr);
    },

    getOutputResp(n) {
        let str = '';
        for (let i = 1; i <= n; i++) {
            if (i % 7 === 0 && i % 4 === 0) {
                str += 'marcopolo';
            } else if (i % 7 === 0) {
                str += 'polo'
            } else if (i % 4 === 0) {
                str += 'marco'
            } else {
                str += i;
            }
            str += ' ';
        }
        let newStr = '';
        for (let j = 0; j <= str.length - 1; j++) {
            if (j % 1000 === 0) {
                newStr = newStr + '\n';
            }
            newStr += str[j]
        }
        return newStr;
    }

}