// src/index.ts
var index_default = {
  async fetch(request) {
    const countryMap = {
      PH: "https://uat.plasticbank.com/ph/individuals",
      ID: "https://uat.plasticbank.com/id/individuals",
      US: "https://uat.plasticbank.com/us/individuals",
      CA: "https://uat.plasticbank.com/ca/individuals"
    };
    const country = request.cf.country;
    if (country != null && country in countryMap) {
      const url = countryMap[country];
		const baseUrl = new URL(request.url);
      console.log(baseUrl);
		if (baseUrl.pathname.startsWith('/individuals')) {
      return new Response('Response for specific path');
    }
    return fetch(request);
      if(request.url == url){
        return fetch(request);
      } else {
        return Response.redirect(url); //test
      }
    } else {
      return fetch(request);
    }
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
