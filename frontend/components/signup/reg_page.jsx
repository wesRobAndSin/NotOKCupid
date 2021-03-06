import React from 'react';
import InitialRegistrationContainer from './initial_reg_container';
import { withRouter } from 'react-router';


class RegPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.setModal(true);
  }

  handleGuest(e) {
    e.preventDefault();

    this.props.login({ username: "wesrobinson", password: "robinson" })
      .then((user) => {
        this.props.router.push('/');
      });
  }

  render() {
    return (
      <div>
        <div className="background group">
          <div className="reg-header group">
            <div className="login-header">
              { "Already a member?" }
              <button className="login-button" onClick={ this.handleClick } >
                Sign In
              </button>
              <button className="demo-button" onClick={ this.handleGuest } >
                Demo Login
              </button>
            </div>
            <h1 className="logo">NotOKCupid</h1>
          </div>
          <div className="reg-bottom">
            <div className="catchphrase">
              Sometimes the worst love matches turn out to be the best.
              <div className="smaller-caption">
                {"Find the Yin to your Yang. Or the worst person you've ever met. Ever"}
              </div>
            </div>
            <InitialRegistrationContainer />
          </div>
        </div>
        <div className="bottom-section group">
          <div className="image-container group">
            <div className="image-box">
              <img src="http://cdn.karatebyjesse.com/wp-content/uploads/2013/07/angry_person.jpg"></img>
              <p>
                Signing up takes two minutes and is totally free.
              </p>
            </div>
            <div className="image-box">
              <img src="https://cdn.techinasia.com/wp-content/uploads/2009/12/hearing.jpg"></img>
              <p>
                {"Our matching algorithm helps you find your complete opposite."}
              </p>
            </div>
            <div className="image-box">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtbQT3I-WfgEhn-rn2r1vs5u-VByAPVB0ZkfguuAMCYmNhp7fG2w"></img>
              <p>
                {"Proceed with caution."}
              </p>
            </div>
          </div>
        </div>
        <footer className="footer group">
          <p className="footer-copy-styling">
            {"© NotOKCupid 2016"}
          </p>
          <p className="footer-disclosure-styling">
            {"Full Disclosure: You may hate this person more than anyone, ever."}
          </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(RegPage);
