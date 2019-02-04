import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    return (
      <footer>
        <div className="wrapper">

          <div className="top">

            <p>Monthly landing page tips and tools in you inbox</p>
            <div className="subscribe">
              <span className="fa fa-envelope"></span><input onChange={this.handleChange} type="text" value={this.state.email} placeholder="Email Adress" />
              <button>Subscribe</button>
            </div>

          </div>
          <hr />
          <div className="bottom">
            <p> &copy; BrandName 2019, All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

