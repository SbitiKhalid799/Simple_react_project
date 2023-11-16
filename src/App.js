// import logo from './logo.svg';
// import './App.css';
//import Taches from './Tache'
//import Afficher from './Chercher/Afficher'
import Produits from './Chercher/cherches_1/Produits';
import {ListData} from './Chercher/cherches_1/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chercher/cherches_1/style.css';
import { useState } from 'react';



function App() {
  const [categore,setCategore] = useState('rein');
  const [Vcat,setVCat] = useState('');
  const handler = (event) => {
    setVCat(event.target.value)
  }
  return (
    <div className='container'>
      {/* {<Taches/>} */}
      <div className='m-4 input-group' onChange={(event) => handler(event)} style={{display:'flex'}}>
      <select className='form-select'>
        <option value="rein"  selected>Tout les catégories</option>
        <option value="Pc">Pc</option>
        <option value="Accessoires">Accessoires</option>
        <option value="Audio">Audio</option>
        <option value="Tablette">Tablette</option>
        <option value="Imprimantes">Imprimantes</option>
        <option value="Stockage">Stockage</option>
        <option value="Réseaux">Réseaux</option>
        <option value="Logiciels">Logiciels</option>
        <option value="Jeux">Jeux</option>
        <option value="Batteries">Batteries</option>
        <option value="Écrans">Écrans</option>
    </select>
      <button onClick={() => setCategore(Vcat)} className='btn'>Ok</button>
      </div>
      <Produits ListData={ListData} categore={categore}/>
    </div>
  );
}

export default App;
