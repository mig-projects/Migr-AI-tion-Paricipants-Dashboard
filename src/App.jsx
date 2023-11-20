import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import Onboarding from "./features/onboaring/onboarding.jsx";
import HomeScreen from "./features/home/home_screen.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignInScreen from "./features/sign_in/sign_in_screen.jsx";

// This component is used to render the correct page based on the URL
const Routing = () => {
  return <Routes>
    <Route path="/sign-in" element={<SignInScreen />} />
    <Route path="/onboarding" element={<Onboarding/>} />
    <Route path="/home" element={<HomeScreen />} />
    <Route path="*" element={<Navigate to='/home' />} />
  </Routes>;
}

function App() {
  return <div id="App">
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </div>;
}

export default App;
