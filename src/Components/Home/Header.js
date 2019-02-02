import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="top-nav">
          <p>top nav</p>
        </nav>

        <div className="content">
          <h3>Landing Pages Hub</h3>
          <p>Community of designers and makers to explore,
            share, and get inspired by beautifully
            designed landing pages of startups like yours.
        </p>
        </div>


        <nav className="bottom-nav">
          <ul>
            <li>View All</li>
            <li>Startups</li>
            <li>Product</li>
            <li>Social</li>
            <li>Crypto</li>
            <li>Productivity</li>
            <li>Template</li>
          </ul>

        </nav>
      </header>
    );
  }
}

