export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,}$/;

export const fullNameRegex = /^[A-Za-z\s.'-]*$/;

export const RGRegex = /^[0-9]{1,2}\.?[0-9]{3}\.?[0-9]{3}-?[0-9a-zA-Z]{1}$/;

export const alphaNumericRegex = /^[a-zA-Z0-9-]+$/;

export const CPFRegex =
  /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
