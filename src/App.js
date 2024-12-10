import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import Biopharma from "./Pages/Biopharma/Index";
import Web3 from "./Pages/Web 3.0 Technology/Index";
import Logistics from "./Pages/Transportation & Logistics/Index";
import Technical from "./Pages/Technical TRA/Index";
import Penetration from "./Pages/Pentration Testing/Index";
import Teaming from "./Pages/Red Teaming/Index";
import Cloud from "./Pages/Cloud Security Testing/Index";
import Application from "./Pages/Application Threat Modeling/Index";
import Incident from "./Pages/Incident Reponse/Index";
import Phishing from "./Pages/Phishing Simlation/Index";
import Posture from "./Pages/Assessments/Cyber Security Posture Assessment & Maturity Benchmarking/Index";
import Threat from "./Pages/Assessments/Threat Risk Assessment/Index";
import Gap from "./Pages/Assessments/Security Gap Assessment/Index";
import Valnerabiliy from "./Pages/Assessments/Vulnerability Assessment/Index";
import Privacy from "./Pages/Assessments/Privacy RiskImpact Assessment/Index";
import Architecture from "./Pages/Assessments/Cybersecurity Architecture Assessment/Index";
import Ramsomware from "./Pages/Assessments/Ransomware Preparedness Assessment/Index";
import Configure from  "./Pages/Assessments/Ransomware Preparedness Assessment/Index";
import Scure from "./Pages/Assessments/Security Gap Assessment/Index";
import Careers from "./Pages/Careers/Index"


function App() {

  return (
    <div className="App scroll-smooth duration-300 overflow-hidden">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/biopharma" element={<Biopharma/>}/>
          <Route path="/web3.0-technology" element={<Web3/>}/>
          <Route path="/transportation-logistics" element={<Logistics/>}/>
          <Route path="/technical-tra" element={<Technical/>}/>
          <Route path="/penetration-testing" element={<Penetration/>}/>
          <Route path="/red-teaming" element={<Teaming/>}/>
          <Route path="/cloud-security-testing" element={<Cloud/>}/>
          <Route path="/application-threat-modelling" element={<Application/>}/>
          <Route path="/incident-response" element={<Incident/>}/>
          <Route path="/phishing-simulation" element={<Phishing/>}/>
          <Route path="/posture-assessment-maturity" element={<Posture/>}/>
          <Route path="/threat-risk-assessment" element={<Threat/>}/>
          <Route path="/gap-assessment" element={<Gap/>}/>
          <Route path="/valnerabiliy-assessment" element={<Valnerabiliy/>}/>
          <Route path="/privacy-risk-impact" element={<Privacy/>}/>
          <Route path="/architecture-assessment" element={<Architecture/>}/>
          <Route path="/ransomware-preparedness-assessment" element={<Ramsomware/>}/>
          <Route path="/security-configuration-review" element={<Configure/>}/>
          <Route path="/secure-code-review" element={<Scure/>}/>
          <Route path="/careers" element={<Careers/>}/>

        </Routes>
    </div>
  )
}

export default App
