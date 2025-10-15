(function(){
  // Obfuscated target: base64(url) then reversed.
  const s = '==wYxIDMlJWY3U2N2UDM1kDO1EDNyAzYhZWMkJmNxgTOk1Telt2PhlTdhtmbwEXcv02bj5SbwNWZ0F2ZlZXa0NWZmZWZuc3d39yL6MHc0RHa';

  function decode(){
    try{
      const rev = s.split('').reverse().join('');
      const url = atob(rev);
      return url;
    }catch(e){
      console.error('decode error', e);
      return null;
    }
  }

  try{
    Object.defineProperty(window, 'getTargetUrl', {
      value: decode,
      writable: false,
      configurable: false,
      enumerable: false
    });
  }catch(e){
    window.getTargetUrl = decode;
  }

  if (typeof __sandbox !== 'undefined') {
    __sandbox.getTargetUrl = decode;
  }
})();
