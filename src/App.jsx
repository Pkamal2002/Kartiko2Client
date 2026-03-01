import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { SignUpPage } from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import OutletPage from "./pages/OutletPage"
import ShopPage from "./pages/ShopPage"
import CreateProductPage from "./pages/Admin/CreateProductPage"
import CategoriesPage from "./pages/CategoriesPage"
import AboutPage from "./pages/AboutPage"

const App = () => {
  return (
    <Routes>

      {/* Layout Route */}
      <Route element={<OutletPage />}>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/categories" element = {<CategoriesPage/>}/>

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<CreateProductPage/>} />

      </Route>

      {/* Auth Routes (No Navbar/Footer) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

    </Routes>
  )
}

export default App