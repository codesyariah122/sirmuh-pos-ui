/**
 *
 * @param  props
 * @returns Inject
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */

const FormatCurrency = (number) => {
  // console.log(number)
  const currency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);

  return currency;
};

export default ({ app }, inject) => {
  inject("format", FormatCurrency);
};
