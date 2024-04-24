// import { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/landing"));

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard{" "}
//       </button>

//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         {" "}
//         Landing
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
//wrap anytime that wants to use the teleported value inside a Provide
  return (
    <>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
     
    </>
  );
}

function Count({setCount}) {
  return (
    <div>
    <CountRerender />
    <Button  setCount={setCount} />

    </div>
  )
}

function CountRerender() {
const count = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}

function Button({ setCount}) {
  const count = useContext(CountContext)
  console.log(count)
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrease</button>
    </>
  );
}

export default App;
