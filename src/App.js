// App.js
// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   createRoutesFromElements,
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Map from "./pages/MapChart";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import RootLayout from "./layout/RootLayout";
// import HelpLayout from "./layout/helpLayout";
// import Faq from "./components/help/Faq";
// import Contact from "./components/help/Contact";
// import CareerLayout from "./layout/CareerLayout";
// import Career, { careerLoaders } from "./pages/Career";
// import CareerDetails, { careerDetailsLoader } from './pages/CareerDetails';
// import CarrerError from "./pages/CareerError";
// import MapChart from "./pages/MapChart";
// import LandPlotComponent from "./pages/LandPlotComponent";
// import PlotView from "./pages/PloteVeiw";
// import PentagonalView from "./pages/PentagonalView";
import SvgView from './pages/SvgView';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="map" element={<Map />} />
//       <Route path="help" element={<HelpLayout />}>
//         <Route path="faq" element={<Faq />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>
//       <Route path="careers" element={<CareerLayout />} errorElement={<CarrerError  />}>
//         <Route index element={<Career />} loader={careerLoaders} />
//         <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}  />
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

const App = () => {
  return (
    <div>
      <SvgView />
      {/* <PentagonalView /> */}
      {/* <PlotView  /> */}
      {/* <LandPlotComponent  /> */}
      {/* <MapChart  /> */}
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
