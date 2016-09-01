/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

function HomePage() {
  return (
    <article>
      <div>
        <section>
        Etiam viverra erat in tincidunt viverra. Nulla ultrices suscipit enim hendrerit rutrum.
        In hac habitasse platea dictumst. Integer aliquet ut nunc in vulputate. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus
        tincidunt ipsum sed massa dictum, eu varius dui laoreet. Fusce a auctor lectus, vel
        tempus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Sed condimentum turpis nec nunc auctor, a mollis eros ultricies. Curabitur
        blandit viverra velit, ac mattis mi imperdiet quis. Duis eu sodales ipsum. Fusce orci dolor,
        tempus sed lorem non, consectetur egestas metus. Vivamus lorem nisl, congue maximus consectetur ut,
        efficitur nec mi. Nunc ac lectus sit amet ligula accumsan semper.
        </section>
      </div>
    </article>
  );
}

// Wrap the component to inject dispatch and state into it
export default HomePage;
