import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainpage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
