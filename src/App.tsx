import './App.css';
import './index.css';
import Header from './composants/Accueil/Header/Header';
import Bloc1 from './composants/Accueil/Bloc1';
import Footer from './composants/Accueil/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* ------------------------------------------- Conteneur de l'image avec voile noir ------------------------------------------- */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/Accueil/fond-ecran-accueil.webp)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ------------------------------------------- Contenu au premier plan ------------------------------------------- */}
      <div className="relative z-10">
        <Header />
        <Bloc1 />
        <Footer />
      </div>
    </div>
  );
}

export default App;