import './static/templates/styles.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import CustomNavbar from './Components/CustomNavbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
