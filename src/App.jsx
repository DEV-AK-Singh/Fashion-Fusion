import './App.css'
import Navbar from "./components/Navbar";
import SalesNotiBanner from "./components/SalesNotiBanner";
import Banner from "./components/Banner";
import HomeContent from './components/HomeContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <SalesNotiBanner/>
        <Banner/>
        <HomeContent/>
        <Footer/>
    </div>
  );
}

export default App;
