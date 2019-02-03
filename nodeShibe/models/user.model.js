const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const TE = require('../config/TE');
let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: { type : String , unique : true, required : true },
  password: { type : String , unique : true },
  salt:   String,
  email: { type : String , unique : true },
  uid: { type : String , unique : true, required : true },
  jwt: { type : String , unique : true, required : false },
});

// Relationships
// UserSchema.virtual('companies', {
//   ref: 'Company',
//   localField: '_id',
//   foreignField: 'users.user',
//   justOne: false,
// });

userSchema.pre('save', async function (next) {
  if(this.isModified('password') || this.isNew){
      let err, salt, hash;
      [err, salt] = await to(bcrypt.genSalt(10));
      if(err) TE(err.message, true);

      [err, hash] = await to(bcrypt.hash(this.password, salt));
      if(err) TE(err.message, true);

      this.password = hash;
  } else{
      return next();
  }
});

userSchema.methods.validatePassword = async function(pw){
  let err, pass
  if(!this.password) TE('password not set');

  [err, pass] = await to(bcrypt_p.compare(pw, this.password));
  if(err) TE(err);

  if(!pass) TE('invalid password');

  return this;
}

// UserSchema.methods.Companies = async function(){
//     let err, companies;
//     [err, companies] = await to(Company.find({'users.user':this._id}));
//     if(err) TE('err getting companies');
//     return companies;
// }


userSchema.methods.getJWT = function(){
  let expiration_time = parseInt(CONFIG.jwt_expiration);
  return "Bearer "+jwt.sign({user_id:this._id}, CONFIG.jwt_encryption, {expiresIn: expiration_time});
};
userSchema.methods.toWeb = function(){
  let json = this.toJSON();
  json.id = this._id;//this is for the front end
  return json;
};


module.exports = mongoose.model('User', userSchema);
