import NavBar from "./components/Layout/NavBar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Layout/Footer";
// import TechExpertise from "./components/sections/TechExpertise";
function App() {

  return (
   <div className="min-h-screen bg-[#050505] text-white">
    <NavBar />
    <main>
      <Hero />
      <About />
      {/* <TechExpertise /> */}
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
   </div>
  )
}

export default App;