function sendEmailVerificationRequest(user) {
    console.log(`sent email verification request to ${user.email}`);
}

module.exports = {
    sendEmailVerificationRequest
}