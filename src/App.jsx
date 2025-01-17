// import "./App.css";
// import "./index.css";
// // import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

// //pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Faq from "./pages/help/Faq";
// import Contact, { contactAction } from "./pages/help/Contact";

// // function App() {
// //     return (
// //         <BrowserRouter>
// //             <header>
// //                 <nav>
// //                     <h1>Jobarouter</h1>
// //                     <NavLink to="/">Home</NavLink>
// //                     <NavLink to="about">About</NavLink>
// //                 </nav>
// //             </header>

// //             <main>
// //                 <Routes>
// //                     <Route index element={<Home />} />
// //                     <Route path="about" element={<About />} />
// //                 </Routes>
// //             </main>
// //         </BrowserRouter>
// //     );
// // }

// // export default App;

// //layouts
// import RootLayout from "./layouts/RootLayout";
// import HelpLayout from "./layouts/HelpLayout";
// import NotFound from "./pages/NotFound";
// import CareersLayout from "./layouts/CareersLayout";
// import Careers, { careersLoader } from "./pages/careers/Careers";
// import CareerDetails, {
//   careerDetailsLoader,
// } from "./pages/careers/CareerDetails";
// import CareersError from "./pages/careers/CareersError";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />

//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />} />
//         <Route path="contact" element={<Contact />} action={contactAction} />
//       </Route>

//       <Route
//         path="careers"
//         element={<CareersLayout />}
//         errorElement={<CareersError />}
//       >
//         <Route
//           index
//           element={<Careers />}
//           loader={careersLoader}
//           //   errorElement={<CareersError />}
//         />
//         <Route
//           path=":id"
//           element={<CareerDetails />}
//           loader={careerDetailsLoader}
//           //   errorElement={<CareersError />}
//         />
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;









//For Lazing loading//
import "./App.css";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";

// Lazy-loaded components
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Faq = React.lazy(() => import("./pages/help/Faq"));
const Contact = React.lazy(() => import("./pages/help/Contact"));
import { contactAction } from "./pages/help/Contact";

// Layouts and other components
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="about"
        element={
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
        }
      />
      <Route path="help" element={<HelpLayout />}>
        <Route
          path="faq"
          element={
            <Suspense fallback={<div>Loading FAQ...</div>}>
              <Faq />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<div>Loading Contact...</div>}>
              <Contact />
            </Suspense>
          }
          
          action={contactAction}
        />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

