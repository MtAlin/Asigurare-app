import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CreateOffer from "./components/createOffer/CreateOffer";
import Profile from "./pages/profile/Profile";
import OffersProfile from "./pages/offers/OffersProfile";
import OffersDetails from "./pages/offers/OffersDetails";
import { PublicRoutes } from "./components/protectedRoutes/PublicRoutes";
import { ProtectedRoutes } from "./components/protectedRoutes/ProtectedRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes using token */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/createOffer" element={<CreateOffer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offersProfile" element={<OffersProfile />} />
          <Route path="/offerDetails/:id" element={<OffersDetails />} />
        </Route>
        {/* public outes */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
