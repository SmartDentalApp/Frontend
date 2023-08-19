import { debounce } from "@mui/material";

export const delayedValidation = debounce((validateFn: Function, regex: RegExp, value: string) => {
    validateFn(validateStringWithRegex(regex, value));
}, 1000);

export const validateStringWithRegex = (regex: RegExp, value: string) => {
    return regex.test(value);
};