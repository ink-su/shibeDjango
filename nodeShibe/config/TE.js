module.exports.TE = TE = function(err_message, log){ // TE stands for Throw Error
  if(log === true){
      console.error(err_message);
  }
  throw new Error(err_message);
};
