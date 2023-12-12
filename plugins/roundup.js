const roundUpVal = (val) => {
  let roundUp = (Math.round(val * 100) / 100).toFixed(0);
  return roundUp;
};

export default ({ app }, inject) => {
  inject("roundup", roundUpVal);
};
