import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {AppContextConsumer} from "../../Context";

export default class Home extends React.Component{

  render(){
    return(
        <AppContextConsumer>
          { (data) =>
          
            <React.Fragment>
            <Header 
            changeFilters={data.changeFilters}
            filters={data.filters}
            />
            <Content sites={data.data}/>
            <Footer/>
            </React.Fragment>
          }
        </AppContextConsumer>
        
    );
  }
}

