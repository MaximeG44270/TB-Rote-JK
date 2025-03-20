import { Route, Routes } from 'react-router-dom';
import Accueil from './composants/Accueil/Accueil';
import Side from './composants/Side/Side';
import Dark from './composants/Planete/Dark/Dark';
import Light from './composants/Planete/Light/Light';
import Mixte from './composants/Planete/Mixte/Mixte';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/side" element={<Side />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/light" element={<Light />} />
        <Route path="/mixte" element={<Mixte />} />
      </Routes>
    </div>
  );
}

export default App;
