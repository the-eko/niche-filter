import React from 'react';

export default class Header extends React.Component {

  constructor(props){
    super(props);

    this.state={
      company: "",
      url: "",
      first_cta: "",
      revenue: 0,
      rating: 0,
      mobile_rating: 1,
      has_video: false,
      has_separate_pricing_page: false,
      has_enterprise_options: false,
      has_about_us: false,
      has_faq: false,
      has_pricing_tiers: false,
      speed_test: 1,
    }
  }

  handleChange = (event)=> {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

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
            <li><label>Company Name</label>
              <input name="company" onChange={this.handleChange} type="text" value={this.state.company} placeholder="Company Name" />
            </li>

            <li><label>Website</label>
              <input name="url" onChange={this.handleChange} type="text" value="" placeholder="Website" />
            </li>

            <li>
              <label>First CTA: </label>
              <input name="first_cta" onChange={this.handleChange} type="text" value="" placeholder="First CTA" />
            </li>

            <li>
              <label htmlFor="revenue"> Revenue </label>
              <select name="revenue" id="revenue">
                <option value="100">100k+</option>
                <option value="100">200k+</option>
                <option value="100">300k+</option>
              </select>

            </li>

            <li>
              <li>
                <label htmlFor="rating"> Rating</label>
                <select name="rating" id="rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

              </li>
            </li>

            <li>
              <li>
                <label htmlFor="mobile_rating"> Mobile Rating</label>
                <select name="mobile_rating" id="mobile_rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

              </li>
            </li>

            <li>
              <label>
              Video
                <input
                  name="has_video"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>


            <li>
              <label>
              separate pricing page:
                <input
                  name="has_separate_pricing_page"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>

            <li>
              <label>
              Enterprise Options:
                <input
                  name="has_enterprise_options"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>


            <li>
              <label>
              Has About Us:
                <input
                  name="has_about_us"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>


            <li>
              <label>
              Has Faqs:
                <input
                  name="has_faq"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>

    

            <li>
              <label>
             Pricing Tiers:
                <input
                  name="has_pricing_tiers"
                  type="checkbox"
                  checked={true}
                  onChange={this.handleInputChange} />
                </label>
            </li>

            <li>
              <label htmlFor="speed_test">Google Speed Test</label>
              <input type="range" name="speed_test" id="speed_test" start={1} end={100}/>
            </li>

          </ul>

        </nav>
      </header>
    );
  }
}

