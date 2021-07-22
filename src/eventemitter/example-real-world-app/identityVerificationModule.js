function initiateIdentityVerification(user) {
    console.log(`initiated identity verification for ${user.email}`);
    setTimeout(() => {
        console.log(`identity verification for ${user.email} completed!`);
    }, 1000)
}

module.exports = {
    initiateIdentityVerification
}