import React from 'react';
import img from "../../imgs/img_snow.jpg";

export default class Content extends React.Component {

  render() {

    const data = this.props.sites;

    return (
      <main>

        {data.map(site => (
          <div className="site-content">
          <img src={img} alt={site.name} />
          <div className="description">
            <h4>{site.name}</h4>
            <p>{site.description}</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>
        ))}

        
      </main>
    );
  }
}

