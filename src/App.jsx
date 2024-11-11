import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AppointmentForm from './Components/AppointmentForm';
import BloodSearch from "./Components/BloodSearch";
import UrgentBloodNeeded from './Components/UrgentBloodNeeds';
import HealthSafetyInfo from './Components/HealthSafetyInfo';
import Testimonials from './Components/Testimonials';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

// Main App Component
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AppointmentForm />
      <BloodSearch />
      <UrgentBloodNeeded />
      
      <h2 
        className="section-headings" 
        style={{ 
          color: 'red', 
          textAlign: 'center', 
          margin: '60px 0', 
          padding: '1px', 
          fontWeight: 700,
          fontSize:40,
        }}
      >
        Health & Safety Information
      </h2>

      <HealthSafetyInfo />
      <HealthSafetyInfo />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
