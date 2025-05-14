import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderTracking from './pages/OrderTracking';
import {ThemeProvider} from './ThemeContext'

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<OrderTracking />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;