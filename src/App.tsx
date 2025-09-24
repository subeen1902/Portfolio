import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AboutMe from './pages/AboutMe.tsx';

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}
