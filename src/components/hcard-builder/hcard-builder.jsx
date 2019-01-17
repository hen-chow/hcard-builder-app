import React from 'react';
import HCardPreview from 'components/hcard-preview/hcard-preview';
import PersonalDetailsForm from 'components/personal-details-form/personal-details-form';
import AddressDetailsForm from 'components/address-details-form/address-details-form';
import Button from 'components/button/button';
import './hcard-builder.scss';

/*
 * Internal state for the <HCardBuilder /> component
 * - givenName    {String}  - given name entry for the hcard
 * - surnaame     {String}  - surname entry for the hcard
 * - email        {String}  - email entry for the hcard
 * - phone        {String}  - phone entry for the hcard
 * - streetNumber {String}  - street number entry for the hcard
 * - streetName   {String}  - street name entry for the hcard
 * - suburb       {String}  - suburb entry for the hcard
 * - state        {String}  - state entry for the hcard
 * - postcode     {String}  - postcode entry for the hcard
 * - country      {String}  - country entry for the hcard
 * - photo        {String}  - photo entry for the hcard
 */
class HCardBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      streetNumber: '',
      streetName: '',
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
    this.triggerImageUpload = this.triggerImageUpload.bind(this);
  }

  /**
   * @description handler when user clicks to create hcard
   */
  onCreateHcardClick() {
    // click handler for create hcard
  }

  /**
   * @description  handler when user confirms image selection for upload
   * @param {Object} input event object
   */
  uploadImage(event) {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0]),
    });
  }

  /**
   * @description handler to trigger the image upload process
   */
  triggerImageUpload() {
    this.input.click();
  }

  /**
   * @description handler when value changes in <input />
   * @param {Object} input event object
   */
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
          <div className="form__row hcard-builder__buttons">
            <div className="form__field form__field--left hcard-builder__button">
              <Button color="grey" onClick={this.triggerImageUpload}>Upload Avatar Image</Button>
              <input id="fileItem" type="file" onChange={this.uploadImage} color="grey" ref={this.setInputRef} />
            </div>
            <div className="form__field form__field--right hcard-builder__button">
              <Button buttonType="submit" onClick={this.onCreateHcardClick} color="light-blue">Create hCard</Button>
            </div>
          </div>
        </div>
        <div className="hcard-builder__preview">
          <div className="hcard-builder__preview-header">
            <h2 className="hcard-builder__preview-title">hCard Preview</h2>
          </div>
          <HCardPreview
            givenName={this.state.givenName}
            surname={this.state.surname}
            photo={this.state.photo}
            email={this.state.email}
            phone={this.state.phone}
            streetNumber={this.state.streetNumber}
            streetName={this.state.streetName}
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
