import "./App.css";
import "./index.css";
// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

// function App() {
//     return (
//         <BrowserRouter>
//             <header>
//                 <nav>
//                     <h1>Jobarouter</h1>
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="about">About</NavLink>
//                 </nav>
//             </header>

//             <main>
//                 <Routes>
//                     <Route index element={<Home />} />
//                     <Route path="about" element={<About />} />
//                 </Routes>
//             </main>
//         </BrowserRouter>
//     );
// }

// export default App;

//layouts
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
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
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
          //   errorElement={<CareersError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          //   errorElement={<CareersError />}
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
