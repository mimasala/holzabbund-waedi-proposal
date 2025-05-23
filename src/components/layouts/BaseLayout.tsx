import { Outlet } from "react-router"
import Navbar from "../organisms/Navbar"
import Footer from "../organisms/Footer"

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default BaseLayout
