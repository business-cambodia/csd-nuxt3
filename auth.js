import bcrypt from 'bcryptjs';

const userFromDBInfo = {
  username: 'bayoflights@dashboard.com',
  password: 'VoucherDashboard!#123',
};

const getCookie = (key) => {
  const cookies = decodeURIComponent(document.cookie);
  let cookielist = cookies.split(';');
  for (let i = 0; i < cookielist.length; i++) {
    let cookie = cookielist[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(key) == 0) {
      return (cookie = cookie.substring(key.length, cookie.length));
    }
  }
  return '';
};

export const checkAuth = async (callBack) => {
  let token = getCookie('tokens-auth=');
  let expired = getCookie('tokens-expired=');
  if (expired) {
    let date = new Date(expired);
    if (new Date() > date) useRouter().push('/login');
  }
  await bcrypt.compare(userFromDBInfo.password, token, (err, result) => {
    callBack(result);
  });
};

export const setCookie = async (obj) => {
  const checkUsername = obj.username == userFromDBInfo.username;
  const checkPassword = obj.password == userFromDBInfo.password;
  const isMatch = checkUsername && checkPassword;
  if (!isMatch) {
    return false;
  } else {
    const passBcrypt = await bcrypt.hash(userFromDBInfo.password, 10);
    const expires = new Date();
    var time = expires.getTime();
    var expireTime = time + 86400 * 13 * 1000; //13 days without login
    expires.setTime(expireTime);

    document.cookie = `tokens-auth=${passBcrypt};expires=${expires}`;
    document.cookie = `tokens-expired=${expires}`;

    return true;
  }
};
