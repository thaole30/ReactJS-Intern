import React, { Suspense, useEffect } from 'react';

// import("./data.jsx").then(data => {
//     console.log(data.userData);
//   })
//   .catch((err) => {
//       console.log("err", err);
//   })

const Component1 = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./Component1")), 1500);
    });
  });
const Component2 = React.lazy(() => import('./Component2'));

const LazyLoading = () => {


  const getComponent = (async() => {
    const data = await import("./data.jsx")
    return data.userData;
  })

  useEffect(() => {
      getComponent().then(res => console.log(res));
  }, [])

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <section>
          <Component1 />
          <Component2 />
        </section>
      </Suspense>
    </div>
  )
}

export default LazyLoading