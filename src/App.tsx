import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import N8nChatWidget from './components/N8nChatWidget';

function App() {
  return (
    <div className="site-shell min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
      <AppointmentModal />
      <N8nChatWidget />
      <div className="pointer-events-none fixed bottom-3 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-full border border-white/40 bg-slate-900/55 px-4 py-2 text-center text-xs text-white/90 backdrop-blur-md sm:bottom-4 sm:left-auto sm:right-4 sm:w-fit sm:translate-x-0 sm:px-5">
        Preview made by ShiftDeploy for Sky Dental UK
      </div>
    </div>
  );
}

export default App;
