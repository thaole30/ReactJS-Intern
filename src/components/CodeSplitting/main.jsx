import("../LazyLoading/data.jsx").then(data => {
    console.log(data.userData);
  })
  .catch((err) => {
      console.log("err", err);
  })

//   const getComponent = (async() => {
//     const data = await import("./data")
//     return data.userData;
//   })
//   getComponent().then(res => console.log(res))