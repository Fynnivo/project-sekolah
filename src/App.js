import HomePage from "./pages/Home/HomePage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cart from "./pages/Cart/Cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Contact from "./pages/Contact/Contact";
import Success from "./pages/Success/Success";
import About from "./pages/About/About";
import Account from './pages/Account/Account'
import Subscription from './pages/Subscription/Subscription'
const stripePromise = loadStripe(process.env.REACT_APP_CHEC_PUBLIC_SANBOX_API);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard/account" element={<Account />} />
      <Route path="/dashboard/subscription" element={<Subscription />} />
      <Route
        path="/cart/:id/:customer_id"
        element={
          <Elements stripe={stripePromise}>
            <Cart />
          </Elements>
        }
      />
      <Route path="/success/:session_id" element={<Success />} />
    </Routes>
  );
}

export default App;
