
'use strict'

module.exports = (app) => {
    // Login and Register
    app.route('/api/v2/auth/login').post(app.postLogin)
}  