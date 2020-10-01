export const isPhoneValid = (inputPhone) => {
  const phone = removeSpaces(inputPhone);
  if (phone === '') {
    return true;
  }
  if (phone.length > 10) {
    return false;
  }
  if (phone[0] !== '0') {
    return false;
  }
  return true;
};

export const formatVietnamesePhone = (inputPhone) => {
  const phone = removeSpaces(inputPhone);
  const length = phone.length;
  if (length <= 4 || length > 10) {
    return phone;
  }

  return [phone.substring(0, 4), phone.substring(4, 7), phone.substring(7, 10)]
    .filter((item) => item !== '')
    .join(' ');
};

export const removeSpaces = (phone) => {
  return phone.split(' ').join('');
};
