export class URLParams {
  constructor(url = window.location.href) {
    this.url = new URL(url);
  }

  setParam(paramName, paramValue) {
    this.url.searchParams.set(paramName, paramValue);
    window.history.pushState({}, '', this.url);
  }

  getParam(paramName) {
    return this.url.searchParams.get(paramName);
  }

  getAllParams() {
    const params = {};
    for (const [key, value] of this.url.searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }

  removeParam(paramName) {
    this.url.searchParams.delete(paramName);
    window.history.pushState({}, '', this.url);
  }

  clearParams() {
    this.url.search = ''
    window.history.pushState({}, '', this.url);
  }

  toString() {
    return this.url.toString();
  }
}
