export const hasRequiredFormData = (data: string[]) => {
  return data.every((value) => {
    return Boolean(value) === true
  });
};

export const hasFormDataError = (validDataArr: Boolean[]) => {
  return validDataArr.some((value) => value === false);
};
