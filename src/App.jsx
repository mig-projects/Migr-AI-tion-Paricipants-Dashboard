import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import Onboarding from "./features/onboaring/onboarding.jsx";
import HomeScreen from "./features/home/home_screen.jsx";

// This component is used to render the correct page based on the URL
const Routing = () => {
  return <Routes>
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
  </div>;
}

export default App;
