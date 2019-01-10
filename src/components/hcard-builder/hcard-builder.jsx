import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HCardPreview from '../hcard-preview/hcard-preview';
import PersonalDetailsForm from '../personal-details-form/personal-details-form';
import AddressDetailsForm from '../address-details-form/address-details-form';
import Button from '../button/button';
import './hcard-builder.scss';

class HCardBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      streetAddress: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      photo: '',
    };

    this.onCreateHcardClick = this.onCreateHcardClick.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }

  onCreateHcardClick() {
    // click handler for create hcard
  }

  uploadImage() {
    // click handler for upload image
  }

  onInputChange(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  setInputRef(el) {
    this.input = el;
  }

  render() {
    return (
      <div className="hcard">
        <div className="hcard-builder">
          <h1>hCard Builder</h1>
          <PersonalDetailsForm onInputChange={this.onInputChange} />
          <AddressDetailsForm onInputChange={this.onInputChange} />
          <Button onClick={this.uploadImage} color="grey">Upload Avatar</Button>
          <Button onClick={this.onCreateHcardClick} color="light-blue">Create hCard</Button>
        </div>
        <div className="preview">
          <HCardPreview
            givenName={this.state.givenName}
            surname={this.state.surname}
            photo={this.state.photo}
            email={this.state.email}
            phone={this.state.phone}
            streeAddress={this.state.streetAddress}
            suburb={this.state.suburb}
            state={this.state.state}
            postcode={this.state.postcode}
            country={this.state.country}
          />
        </div>
      </div>
    );
  }
}

HCardBuilder.displayName = 'HCardBuilder';

export default HCardBuilder;
