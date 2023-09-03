export const hasRequiredFormData = (data: any[]) => {
  console.log(data)
  return data.every((value) => {
    return Boolean(value) === true
  });
};

export const hasFormDataError = (validDataArr: Boolean[]) => {
  return validDataArr.some((value) => value === false);
};
