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
          <ul>
            <li>
             This project originally started as a side by side charting library
            comparison written with react. It is now intended to be a sandbox where
            react components in general can be compared side by side. It&apos;s like a
            TodoMVC, but for react components.
            </li>
            <li>
             Usually, you would install a component, wire it up, and fiddle with it&apos;
            settings to see if it meets your needs. This project intends to do that
            for you, and where applicable expose those settings for manipulation in
            the browser.
            </li>
            <li>
             This project is looking for help, suggestions, and constructive criticism.
            Thank you.
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

// Wrap the component to inject dispatch and state into it
export default HomePage;
