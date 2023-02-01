import { Routes, Route } from 'react-router-dom';

// Componets
import BusinessAccountPage from './componets/pages/BusinessAccountPage';
import PersonalAccountPage from './componets/pages/PersonalAccountPage';
import SellerAccountPage from './componets/pages/SellerAccountPage';

// Style
import './App.css';


function App() {
  return (
    <Routes>
      <Route exact path="/*" element={<PersonalAccountPage />} />
      <Route exact path="/business/*" element={<BusinessAccountPage />}/>
      <Route exact path="/seller/*" element={<SellerAccountPage />} />
    </Routes>
  );
}

function RAW() {
  return (
    <h1>Works</h1>
  );
}


export default App;
