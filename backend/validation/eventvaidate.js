const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateEventInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.ename = !isEmpty(data.ename) ? data.ename : "";
  data.edue = !isEmpty(data.edue) ? data.edue : "";
  data.edes = !isEmpty(data.edes) ? data.edes : "";

  // Event Name checks
  if (Validator.isEmpty(data.ename)) {
    errors.ename = "Event Name field is required";
  }

  // Edue checks
  if (Validator.isEmpty(data.edue)) {
    errors.edue = "Event Due field is required";
  } 
  

  //edes checks
  if (Validator.isEmpty(data.edes)) {
    errors.edes = "Description field is required";
  }

  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
