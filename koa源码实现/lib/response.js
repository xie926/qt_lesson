let response = {
    get body () {
        return this._body  // get时返回该方法
    },
    set body(value) {
        this.res.statusCode = 200
        this._body = value //set 时先保存该方法
    }
} 

module.exports = response