import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <nav className="top-nav">
        <h3 className="brand-name">Brand Name</h3>
        <button>Add your website</button>
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
            
          <li><span className="fa fa-search"></span></li>
            <li>View All</li>
            <li className="divider"></li>
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

