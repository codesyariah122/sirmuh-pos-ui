import { toWords } from "number-to-words";

export default (_, inject) => {
  inject("toWords", toWords);
};
