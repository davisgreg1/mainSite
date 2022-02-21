const ellipseText = (value: string, length: number): string => {
  if (value && value.length <= length) {
    return value;
  }
  return `${value.substring(0, length)}...`;
};

export default ellipseText;
