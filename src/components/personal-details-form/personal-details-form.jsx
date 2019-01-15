import React from 'react';
import PropTypes from 'prop-types';
import Line from 'components/line/line';
import './personal-details-form.scss';

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
        <span className="form__title">Personal details</span>
        <Line />
        <form ref={this.setInputRef}>
          <div className="form__row">
            <div className="form__field form__field--left">
              <label htmlFor="givenNameInput">Given Name</label>
              <input id="givenNameInput" type="text" name="givenName" onChange={this.props.onInputChange} />
            </div>
            <div className="form__field form__field--right">
              <label htmlFor="surnameInput">Surname</label>
              <input id="surnameInput" type="text" name="surname" onChange={this.props.onInputChange} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__field form__field--left">
              <label htmlFor="emailInput">Email</label>
              <input id="emailInput" type="text" name="email" onChange={this.props.onInputChange} />
            </div>
            <div className="form__field form__field--right">
              <label htmlFor="phoneInput">Phone</label>
              <input id="phoneInput" type="text" name="phone" onChange={this.props.onInputChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PersonalDetailsForm.propTypes = {
  /*
   * callback when input in form changes 
   */
  onInputChange: PropTypes.func,
};

PersonalDetailsForm.displayName = 'PersonalDetailsForm';

export default PersonalDetailsForm;
