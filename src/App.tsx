import Header from 'components/Header';
import Hero from 'components/Hero';
import Skills from 'components/Skills';
import Projects from 'components/Projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="main">
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
