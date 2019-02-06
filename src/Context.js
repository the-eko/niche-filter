import React from "react";
import data from "./Data";

let AppContext =  React.createContext();

class AppContextProvider extends React.Component{

  constructor(props){
    super(props);

    this.data = [...data];
    this.filtered = this.data;

    this.state = {
      min_revenue: 0,
      max_revenue: 0,
      revenue: 50,
      rating: 0,
      mobile_rating: 1,
      
      speed_test: 50,

      has_video: false,
      has_separate_pricing_page: false,
      has_enterprise_options: false,
      has_about_us: false,
      has_faq: false,
      has_pricing_tiers: false,
    }
  }

  changeFilters = (fieldname, value)=>{
    this.setState((state) =>{
      return {
        [fieldname]: value
      }
    }, 
    this.filterFunc()
    )
  }

  filterFunc = () => {
    this.data = data.filter(item =>{
      return ( 
        (this.state.has_video    ?  item.hasVideo  === this.state.has_video : true  ) 
      )
    });
    
  }


  throttle = (func, ms) => {

    let isThrottled = false,
      savedArgs,
      savedThis;

    function wrapper() {

      if (isThrottled) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }

      func.apply(this, arguments);

      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }

    return wrapper;
  }

  render(){
    return(
      <AppContext.Provider 
      value={
        {data: this.data, 
        changeFilters: this.changeFilters, 
        filters: {...this.state}}
        }>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppContextConsumer = AppContext.Consumer;

export {AppContextProvider, AppContextConsumer}
