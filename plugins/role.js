/**
 * @param {objectParse}
 * @returns {Object}
 * @author Puji Ermanto <puji.ermanto@gmail.com>
 */

const getRoles = (data) => {
  if (data) {
    const roles = data;
    return roles;
  } else {
    return null;
  }
};

export default ({ app }, inject) => {
  inject("role", getRoles);
};
