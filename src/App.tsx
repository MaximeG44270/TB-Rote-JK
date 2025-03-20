import { Route, Routes } from 'react-router-dom';
import Accueil from './composants/Accueil/Accueil';
import Side from './composants/Side/Side';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/side" element={<Side />} />
      </Routes>
    </div>
  );
}

export default App;
