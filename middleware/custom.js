//middleware to lowercase the address 
function lowerCase(req, res, next) {
    var address = req.query.address.toLowerCase();
    req.query.address = address
    console.log("HERE IS THE MIDDLEWARE: ", req.query.address)
    next()
}

module.exports = { lowerCase }