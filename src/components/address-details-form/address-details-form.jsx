import React from 'react';
import PropTypes from 'prop-types';
import Line from 'components/line/line';
import './address-details-form.scss';

class AddressDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.setInputRef = this.setInputRef.bind(this);
  }

  setInputRef(el) {
    this.input = el;
  }

  render() {
    return (
      <div className="address-details-form">
        <span className="form__title">Address</span>
        <Line />
        <form ref={this.setInputRef}>
          <div className="form__row">
            <div className="form__field form__field--left">
              <label htmlFor="streetNumberInput">House Name or #</label>
              <input id="streetNumberInput" type="text" name="streetNumber" onChange={this.props.onInputChange} />
            </div>
            <div className="form__field form__field--right">
              <label htmlFor="streetNameInput">Street</label>
              <input id="streetNameInput" type="text" name="streetName" onChange={this.props.onInputChange} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__field form__field--left">
              <label htmlFor="suburbInput">Suburb</label>
              <input id="suburbInput" type="text" name="suburb" onChange={this.props.onInputChange} />
            </div>
            <div className="form__field form__field--right">
              <label htmlFor="stateInput">State</label>
              <input id="stateInput" type="text" name="state" onChange={this.props.onInputChange} />
            </div>
          </div>
          <div className="form__row">
            <div className="form__field form__field--left">
              <label htmlFor="postcode">Postcode</label>
              <input id="postcode" type="text" name="postcode" onChange={this.props.onInputChange} />
            </div>
            <div className="form__field form__field--right">
              <label htmlFor="countryInput">Country</label>
              <input id="countryInput" type="text" name="country" onChange={this.props.onInputChange} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddressDetailsForm.propTypes = {
  /*
   * callback when input in form changes 
   */
  onInputChange: PropTypes.func,
};

AddressDetailsForm.displayName = 'AddressDetailsForm';

export default AddressDetailsForm;
