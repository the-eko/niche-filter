import React from 'react';
import img from "../../imgs/img_snow.jpg";

export default class Content extends React.Component {

  render() {
    return (
      <main>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>

        <div className="site-content">
          <img src={img} alt="" />
          <div className="description">
            <h4>Name</h4>
            <p>Description of site</p>
          </div>
          <div className="button">
          <a><span class="fa fa-arrow-right"></span></a>
          </div>
        </div>
        
      </main>
    );
  }
}

