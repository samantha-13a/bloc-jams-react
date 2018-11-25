import React from 'react';

const Landing = () => (
  <section className="landing">
    <h2 className="hero-title">TURN THE MUSIC UP!</h2>

    <section className="selling-points">
      <div className="point-one">
        <h2 className="point-title">Choose Your Music</h2>
        <p className="point-description">The world is full of music!</p>
        <p>Why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point-two">
        <h2 className="point-title">Unlimited - Streaming - Ad-Free</h2>
        <p className="point-description">No arbitrary limits.</p> 
        <p>No distractions.</p>
      </div>
      <div className="point-three">
        <h2 className="point-title">Mobile Enabled</h2>
        <p className="point-description">Listen to your music on the go.</p>
        <p>This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;