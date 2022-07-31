const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    files: []
}, { collection: "google_drive_users" })

userSchema.statics.findUser = async function(user) {
    
    var user = await this.find({username:user});
    return user;

}

userSchema.statics.insertUser = async function(user) {

    await (await this.create(user)).save();

}

userSchema.statics.findAllUsers = async function() {

    var allUsers = await this.find({});
    return allUsers;

}

userSchema.statics.updateUser = async function(user) {

    await this.updateOne(
        { username: user.username },
        { files: user.files }
    )

}

const User = mongoose.model("User", userSchema);
module.exports = User;



