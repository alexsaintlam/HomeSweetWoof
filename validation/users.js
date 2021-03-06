const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};
  data.name = validText(data.name) ? data.name : '';



  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
  
}