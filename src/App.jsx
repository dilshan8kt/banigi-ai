import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Dashboard from "./pages/dashboard/Dashboard"
import InteriorDesign from "./pages/dashboard/dashboardPages/InteriorDesign"
import ExteriorDesign from "./pages/dashboard/dashboardPages/ExteriorDesign"
import LandscapeDesign from "./pages/dashboard/dashboardPages/LandscapeDesign"
import CustomDesign from "./pages/dashboard/dashboardPages/CustomDesign"
import MyDesign from "./pages/dashboard/dashboardPages/MyDesign"
import PricingDesign from "./pages/dashboard/dashboardPages/PricingDesign"



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} >

          <Route path="/dashboard/interiorDesign" element={<InteriorDesign />} />
          <Route path="/dashboard/exteriorDesign" element={<ExteriorDesign />} />
          <Route path="/dashboard/landscapeDesign" element={<LandscapeDesign />} />
          <Route path="/dashboard/customDesign" element={<CustomDesign />} />
          <Route path="/dashboard/myDesign" element={<MyDesign />} />
          <Route path="/dashboard/myPricing" element={<PricingDesign />} />
        </Route>

      </Routes>


    </>
  )
}

export default App
