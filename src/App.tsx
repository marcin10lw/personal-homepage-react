import Header from 'components/Header';
import Hero from 'components/Hero';
import Skills from 'components/Skills';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="main">
        <Skills />
      </main>
    </>
  );
}

export default App;
