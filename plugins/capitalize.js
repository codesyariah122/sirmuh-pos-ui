const capitalizeFirstLetter = (str) => {
  if (typeof str === "string" || str instanceof String) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    // Jika str bukan string, kembalikan nilai asli
    return str;
  }
};

export default ({ app }, inject) => {
  inject("capitalize", capitalizeFirstLetter);
};
