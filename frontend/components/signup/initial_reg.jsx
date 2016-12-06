import React from 'react';
import { Link, withRouter } from 'react-router';
import PhaseOne from './phase_one';
import PhaseTwo from './phase_two';
import SignUpFormContainer from './sign_up_form_container';


class InitialRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regStage: 0,
      email: "",
      gender: "straight",
      sexuality: "woman",
      age: "",
      location: "",
      age_errors: [],
      zip_errors: [],
    };

    this.update = this.update.bind(this);
    this.handleFirstStage = this.handleFirstStage.bind(this);
    this.handleSecondStage = this.handleSecondStage.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleFirstStage(e) {
    e.preventDefault();

    this.setState({
      sexuality: this.state.sexuality,
      gender: this.state.gender,
      regStage: 1
    });
  }

  handleSecondStage(e) {
    e.preventDefault();


    if (typeof parseInt(this.state.age) !== 'number' || this.state.age < 18 || this.state.age > 150) {
      this.setState({zip_errors: ""});
      this.setState({age_errors: "Please enter a valid age."});
    } else if (typeof parseInt(this.state.location) !== 'number' || this.state.location.length !== 5) {
      this.setState({age_errors: ""});
      this.setState({zip_errors: "Please enter a valid zip code."});
    } else {
      this.setState({
        email: this.state.email,
        age: this.state.age,
        location: this.state.location,
        age_errors: "",
        zip_errors: "",
        regStage: 2,
      });
    }
  }

  errorList(property) {
    if (this.props.errors[property] === undefined) return [];
    return this.props.errors[property].map((err, idx) => {
      return <li key={idx}>{err}</li>;
    });
  }

  render() {


    let currentForm;

    if (this.state.regStage === 0) {
      currentForm = (
        <PhaseOne
          submit={ this.handleFirstStage }
          update={ this.update }
          sexuality={ this.state.sexuality }
          gender={ this.state.gender } />
      );
    } else if (this.state.regStage === 1) {
      currentForm = (
        <PhaseTwo
          submit={ this.handleSecondStage }
          update={ this.update }
          email={ this.state.email }
          age={ this.state.age }
          location={ this.state.location }
          age_errors={ this.state.age_errors }
          zip_errors={ this.state.zip_errors }/>
      );
    } else if (this.state.regStage === 2) {

      const regInfo = {
        sexuality: this.state.sexuality,
        gender: this.state.gender,
        email: this.state.email,
        age: this.state.age,
        location: this.state.location
      };

      currentForm = (
        <SignUpFormContainer regInfo={ regInfo } />
      );
    }

    return (
      <div className="form-container">
        {currentForm}
      </div>
    );
  }
}
// {this.errorList("errors")}

export default withRouter(InitialRegistration);
