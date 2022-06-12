import axios from "axios";

class APIHandler {
  constructor() {
    this.name = "APIHandler";
    this.api = axios.create({
      baseURL: 'https://cdn.contentful.com',
      headers: {
        'Authorization': 'xG0UPgdg5xb2CB8vN6s1pcBLmlqpnuREmNU6e4fsmCc'
      }
    });
  }


  // get query, with possibility to add query params in the future
  get(routeType,  query) {
    let route
    if (routeType === "entries") {
      route = `/spaces/odlxtlo816v9/environments/master/entries`
    }
    var queryString = "";
    if (query) {
      if (typeof query !== "object")
        throw new Error(
          `${this.name} get() function expects query argument to be of type Object`
        );
      let count = 0;
      let keyCount = Object.keys(query).length;
      for (let key in query) {
        if (!count) queryString += "?";
        if (count && count < keyCount) queryString += "&";
        queryString += `${key}=${query[key]}`;
        count++;
      }
    }

    return this.api.get(route + (queryString || ""));
  }

  // simple post query
  post(route, payload) {
    if (payload && typeof payload !== "object")
      throw new Error(
        `${this.name} post() function expects payload argument to be of type Object`
      );
    return this.api.post(route, payload);
  }

}

export default new APIHandler();
