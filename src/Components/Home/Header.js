import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      min_revenue: 0,
      max_revenue: 0,
      revenue: 50,
      rating: 0,
      mobile_rating: 1,
      has_video: false,
      has_separate_pricing_page: false,
      has_enterprise_options: false,
      has_about_us: false,
      has_faq: false,
      has_pricing_tiers: false,
      speed_test: 50,
    }


  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.props.changeFilters(name, value);

  }

  

  render() {
    return (
      <header>
        <nav className="top-nav">
          <h3 className="brand-name">Brand Name</h3>
          <button>Sign Up, It is Free</button>
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

            <div className="revenues-ratings-speed">
              <li>
                <label htmlFor="revenue"> Revenue </label>
                <select onChange={this.handleChange} name="revenue" id="revenue" value={this.props.filters.revenue}>
                <option value="50">100k+</option>
                  <option value="100">100k+</option>
                  <option value="200">200k+</option>
                  <option value="300">300k+</option>
                  <option value="400">400k+</option>
                  <option value="500">500k+</option>
                </select>

              </li>

              <li>
                <div>


                  <label> Min Revenue: &nbsp; </label>
                  <input
                    name="min_revenue"
                    type="input"
                    checked={this.props.filters.min_revenue}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label> Min Revenue: &nbsp; </label>
                  <input
                    name="max_revenue"
                    type="input"
                    checked={this.props.filters.max_revenue}
                    onChange={this.handleChange}
                  />
                </div>
              </li>

              
            <li>
              <li>
                <label htmlFor="rating"> Rating</label>
                <select onChange={this.handleChange} name="rating" id="rating" value={this.props.filters.rating}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>

              </li>
            </li>

            <li>
              <li>
                <label htmlFor="mobile_rating"> Mobile Rating</label>
                <select onChange={this.handleChange} value={this.props.filters.mobile_rating} name="mobile_rating" id="mobile_rating">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>

              </li>
            </li>

            
            <li>
              <label htmlFor="speed_test">Google Speed Test: {this.props.filters.speed_test}</label>
              <input onChange={this.handleChange} value={this.speed_test} type="range" name="speed_test" id="speed_test" min={1} max={100} />
            </li>

            </div>



            <div className="checkboxes">
              <li>
                <label>
                  Video: &nbsp;
                <input
                    name="has_video"
                    type="checkbox"
                    checked={this.props.filters.has_video}
                    onChange={this.handleChange} />
                </label>
              </li>


              <li>
                <label>
                  separate pricing page: &nbsp;
                <input
                    name="has_separate_pricing_page"
                    type="checkbox"
                    checked={this.props.filters.has_separate_pricing_page}
                    onChange={this.handleChange}
                  />
                </label>
              </li>

              <li>
                <label>
                  Enterprise Options: &nbsp;
                <input
                    name="has_enterprise_options"
                    type="checkbox"
                    checked={this.props.filters.has_enterprise_options}
                    onChange={this.handleChange}
                  />
                </label>
              </li>


              <li>
                <label>
                  Has About Us: &nbsp;
                <input
                    name="has_about_us"
                    type="checkbox"
                    checked={this.props.filters.has_about_us}
                    onChange={this.handleChange}
                  />
                </label>
              </li>


              <li>
                <label>
                  Has Faqs: &nbsp;
                <input
                    name="has_faq"
                    type="checkbox"
                    checked={this.props.filters.has_faq}
                    onChange={this.handleChange}
                  />
                </label>
              </li>



              <li>
                <label>
                  Pricing Tiers: &nbsp;
                <input
                    name="has_pricing_tiers"
                    type="checkbox"
                    checked={this.props.filters.has_pricing_tiers}
                    onChange={this.handleChange}
                  />
                </label>
              </li>
            </div>

          </ul>

        </nav>
      </header>
    );
  }
}

