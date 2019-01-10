import React from 'react';
import PropTypes from 'prop-types';

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
        <h3>ADDRESS</h3>
        <form ref={this.setInputRef}>
          <label htmlFor="suburbInput">Suburb</label>
          <input id="suburbInput" type="text" name="suburb" onChange={this.props.onInputChange} />
          <label htmlFor="stateInput">State</label>
          <input id="stateInput" type="text" name="state" onChange={this.props.onInputChange} />
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" type="text" name="postcode" onChange={this.props.onInputChange} />
          <label htmlFor="countryInput">Country</label>
          <input id="countryInput" type="text" name="country" onChange={this.props.onInputChange} />
        </form>
      </div>
    );
  }
}

AddressDetailsForm.propTypes = {
  onInputChange: PropTypes.func,
};

AddressDetailsForm.displayName = 'AddressDetailsForm';

export default AddressDetailsForm;
