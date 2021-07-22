const EventEmitter = require('events')

class AuthModule extends EventEmitter {
    signUp(user) {
        // save record to the database, then emit 'signUp' event
        this.emit('signUp', user)
    }
}

module.exports = AuthModule