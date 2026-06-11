import { Routes, Route } from "react-router-dom"

import MainLayout from "../layouts/MainLayout"

import Home from "../pages/Home"
import Services from "../pages/Services"
import About from "../pages/About"
import Tech from "../pages/Tech"
import Careers from "../pages/Careers"
import Contact from "../pages/Contact"

const AppRoutes = () => {

  return (

    <MainLayout>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />

        <Route path="/tech" element={<Tech />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </MainLayout>

  )
}

export default AppRoutes