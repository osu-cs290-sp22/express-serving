function logger(req, res, next) {
    console.log("== Request received:")
    console.log("  - Method:", req.method)
    console.log("  - URL:", req.url)
    console.log("  - Headers:", req.headers)
    next()
}

module.exports = logger
