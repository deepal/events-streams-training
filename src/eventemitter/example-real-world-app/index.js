const AuthModule = require('./authModule')
const identityVerification = require('./identityVerificationModule')
const emails = require('./emailModule')

const auth = new AuthModule()

// register listeners
auth.on('signUp', user => {
    emails.sendEmailVerificationRequest(user)
})

auth.on('signUp', user => {
    identityVerification.initiateIdentityVerification(user)
})

auth.signUp({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'john123'
})