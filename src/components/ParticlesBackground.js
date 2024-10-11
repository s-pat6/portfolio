import React, { useEffect } from 'react';
import 'particles.js'; // Import the library

const ParticlesBackground = () => {
  useEffect(() => {
    // Load the particles config once the component is mounted
    window.particlesJS.load('particles-js', 'particles.js-master/particles.json', function() {
      console.log('Particles.js config loaded');
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed', // Ensure it stays fixed in the background
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0, // Ensure it's in the background
        pointerEvents: 'none' // Disable pointer events so you can interact with other content
      }}
    ></div>
  );
};

export default ParticlesBackground;