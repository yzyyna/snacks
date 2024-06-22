// *** Fetch *** //
fetch("https://elm.cangdu.org/v1/pois?city_id=1&keyword=迪士尼&type=search", {
  credentials: "include",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  mode: "cors",
  cache: "force-cache",
})
  .then((result) => {
    console.log("%c ~ result ~ ", "color:#2ecc71");
    return "yes";
  })
  .then((result) => {
    console.log("%c ~ result ~ ", " color:#2ecc71");
    console.log(result);
  })
  .catch((reason) => {
    console.error("Error...", reason);
  }); 
