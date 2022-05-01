let bcrypt = require("bcryptjs");

let hashPassword = (password) => {
  let salt = bcrypt.genSaltSync(10);
  let hashedPassword = bcrypt.hashSync(password, salt);
  console.log('hp '+hashedPassword);
  return hashedPassword;
};
let verifyPassword = (original, hashed, callback) => {
  bcrypt.compare(original, hashed, (err, res) => {
    if (res) {
      console.log('paasss');
      callback(res, null);
    } else {
      callback(null, err);
    }
  });
};
module.exports = {
  hashPassword: hashPassword,
  verifyPassword: verifyPassword,
};
