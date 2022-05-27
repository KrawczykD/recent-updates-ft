export const get = function () {
  const uri = window.location.href.split('?');
  if (uri.length == 2) {
    const vars = uri[1].split('&');
    const getVars: any = {};
    let tmp: any = '';
    vars.forEach(function (v) {
      tmp = v.split('=');
      if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
    });
    return getVars;
  }
};

export const getCountryCode = function () {
  const urlParameters = get();
  let countryCode = 'GB';
  if (urlParameters) {
    countryCode = urlParameters['countrycode'];
  }

  return countryCode;
};

export const setCountryCodeFromUrl = function () {
  if (window.bopr_countrycode == '') {
    window.bopr_countrycode = getCountryCode();
  }
};
