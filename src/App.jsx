import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { SignUpPage } from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import OutletPage from "./pages/OutletPage"

const App = () => {
  return (
    <Routes>

      {/* Layout Route */}
      <Route element={<OutletPage />}>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />

      </Route>

      {/* Auth Routes (No Navbar/Footer) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

    </Routes>
  )
}

export default App