import { Route, Routes } from 'react-router-dom';
import Accueil from './composants/Accueil/Accueil';
import Side from './composants/Side/Side';
import Dark from './composants/Planete/Dark/Dark';
import Light from './composants/Planete/Light/Light';
import Mixte from './composants/Planete/Mixte/Mixte';
import Coruscant from './composants/Planete/Light/DataLight/Coruscant/Coruscant';
import Kashyyyk from './composants/Planete/Light/DataLight/Kashyyyk/Kashyyyk';
import Scarif from './composants/Planete/Light/DataLight/Scarif/Scarif';
import Zeffo from './composants/Planete/Light/DataLight/Zeffo/Zeffo';
import Bracca from './composants/Planete/Light/DataLight/Bracca/Bracca';
import Lothal from './composants/Planete/Light/DataLight/Lothal/Lothal';
import RingOfKafrene from './composants/Planete/Light/DataLight/RingOfKafrene/RingOfKafrene';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/side" element={<Side />} />
        <Route path="/dark" element={<Dark />} />
        <Route path="/light" element={<Light />} />
        <Route path="/mixte" element={<Mixte />} />
        <Route path="/planet/1-coruscant" element={<Coruscant />} />
        <Route path="/planet/2-bracca" element={<Bracca />} />
        <Route path="/planet/3-kashyyyk" element={<Kashyyyk />} />
        <Route path="/planet/4-lothal" element={<Lothal />} />
        <Route path="/planet/5-ring-of-kafrene" element={<RingOfKafrene />} />
        <Route path="/planet/6-scarif" element={<Scarif />} />
        <Route path="/planet/bonus-zeffo" element={<Zeffo />} />
      </Routes>
    </div>
  );
}

export default App;
