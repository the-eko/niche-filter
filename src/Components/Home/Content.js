import React from 'react';
import img from "../../imgs/img_snow.jpg";

export default class Content extends React.Component{

  render(){
    return(
      <main>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>
        <div className="site-content">
        <img src={img} alt=""/>
        </div>

        <div className="pagination">
        123456
        </div>
      </main>
    );
  }
}

