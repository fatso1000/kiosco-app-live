if (window.trustedTypes) {
  window.trustedTypes.createPolicy('kiosco-script-url', {
    createScriptURL(value) {
      const url = new URL(value, window.location.origin)
      if (url.origin !== window.location.origin) throw new TypeError('Only same-origin scripts are allowed')
      return url.href
    }
  })
}
