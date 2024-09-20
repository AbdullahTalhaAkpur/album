const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Arkadaş ekleme metodu
userSchema.methods.addFriend = function(friendId, callback) {
  // Eğer zaten arkadaş listesinde yoksa ekle
  if (!this.friends.includes(friendId)) {
    this.friends.push(friendId);
    this.save(callback);
  } else {
    callback('Bu kullanıcı zaten arkadaşınız.');
  }
};

const User = mongoose.model('User', userSchema);
module.exports = User;
