import React from "react";
import data from "./Data";

let AppContext =  React.createContext();

class ContextProvider extends React.Component{

  render(){
    return(
      <AppContext.Provider value={data}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const ContextConsumer = AppContext.Consumer;

export {ContextProvider, ContextConsumer}
