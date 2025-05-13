import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OrderTracking from './pages/OrderTracking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;