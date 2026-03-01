import { useEffect } from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Letter from './components/Letter'
import Footer from './components/Footer'

import Videos from './components/Videos'

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    };

    // Initial run
    observeElements();

    // Fallback: If after 3 seconds things haven't revealed, reveal them all
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }, 3000);

    // Watch for DOM changes (in case components re-render)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Timeline />
      <Gallery />
      <Videos />
      <Letter />
      <Footer />
    </main>
  )
}

export default App
