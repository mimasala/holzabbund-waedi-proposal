import { BrowserRouter, Route, Routes } from "react-router"
import BaseLayout from "./components/layouts/BaseLayout"
import Index from "./pages/Index"

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route element={<BaseLayout />} >
          </Route>
        </Routes>

      </BrowserRouter >
    </>
  )
}

export default Router
