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

import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
import { useSetRecoilState } from "recoil";
import { evenSelecter } from "./store/atoms/count";

function App() {
  return (
    <>
    <RecoilRoot>
    <Count />
    </RecoilRoot>
   
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRerender />
      <Button />
    </div>
  );
}


function CountRerender() {
  const count = useRecoilValue(countAtom);

  return <div>
  {count}
<EvenCountRenderer />
  </div>;
 
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelecter);

  return <div>
    {isEven ? "Even" : "Odd"}
  </div>
}

function Button() {
  const setCount = useSetRecoilState(countAtom);
  console.log("rerender");
  return (
    <>
      <button
        onClick={() => {
          setCount(count => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count =>  count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
