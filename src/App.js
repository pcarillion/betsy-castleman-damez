import './App.css';

import Image from './static/accueil_img.png'

import Layout from './Components/Layout';

function App() {
  return (
    <Layout>
      <img src={Image} alt="betsy castelman damez" className="welcome-image"/>
    </Layout>
  );
}

export default App;
