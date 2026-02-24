import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
      <AppointmentModal />
      <div className="pointer-events-none fixed bottom-3 p-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-orange-700 px-3 py-1 text-md sm:text-md text-white bg-opacity-20  sm:bottom-4 sm:left-auto sm:right-4 sm:translate-x-0">
        Preview made by ShiftDeploy for Sky Dental UK
      </div>
    </div>
  );
}

export default App;
