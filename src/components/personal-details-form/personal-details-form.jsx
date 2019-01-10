import React from 'react';
import PropTypes from 'prop-types';

class PersonalDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.setInputRef = this.setInputRef.bind(this);
  }

  setInputRef(el) {
      this.input = el;
  }

  render() {
    return (
      <div className="personal-details-form">
        <h3>PERSONAL DETAILS</h3>
        <form ref={this.setInputRef}>
          <label htmlFor="givenNameInput">Given Name</label>
          <input id="givenNameInput" type="text" name="givenName" onChange={this.props.onInputChange} />
          <label htmlFor="surnameInput">Surname</label>
          <input id="surnameInput" type="text" name="surname" onChange={this.props.onInputChange} />
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" type="text" name="email" onChange={this.props.onInputChange} />
          <label htmlFor="phoneInput">Phone</label>
          <input id="phoneInput" type="text" name="phone" onChange={this.props.onInputChange} />
        </form>
      </div>
    );
  }
}

PersonalDetailsForm.propTypes = {
  onInputChange: PropTypes.func,
};

PersonalDetailsForm.displayName = 'PersonalDetailsForm';

export default PersonalDetailsForm;
