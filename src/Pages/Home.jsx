import Dashboard from './Dashboard';
import About from "./About";
import Discover from "./Discover";
import Footer from "./Footer";
import Moniter from "./Moniter";
import Definding from "./Definding"
import Mission from "./Mission";
import Service from "./Ourservices"
import Protecting from "./Protecting";
import Partner from "./Partners";
import Scertificate from "./Scertificate";
import Header from "./Nav"
import Essentials from './Essentials';


function Home() {
  
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Moniter/>
    <Definding/>
    <Mission/>
    <Service/>
    <Protecting/>
    <Essentials/>
    <Partner/>
    <Scertificate/>
    <Discover/>
    <Footer/>
   </>
  );
}

export default Home;
