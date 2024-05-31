export const numberValidation = (param) =>
  param ? param.trim() !== "" && !/^\d*\.?\d*$/.test(param) : false;

export const monthsNumberValidation = (param) =>
  param ? param.trim() !== "" && !/^\d*$/.test(param) : false;
