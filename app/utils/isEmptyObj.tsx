const isEmptyObj = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
};

export default isEmptyObj;
