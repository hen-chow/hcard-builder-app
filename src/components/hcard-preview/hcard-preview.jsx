import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Line from 'components/line/line';
import AvatarImage from 'assets/avatar.png';
import PreviewField from 'components/preview-field/preview-field';
import './hcard-preview.scss';

const HcardPreview = (props) => {
  const classes = classNames('hcard-preview', 'vcard', props.className);

  const avatarUrl = !props.photo ? AvatarImage : props.photo;

  const suburbState = props.suburb !== '' && props.state !== ''
    ? `${props.suburb}, ${props.state}`
    : `${props.suburb} ${props.state}`;

  return (
    <div className={classes}>
      <div className="hcard-preview__header">
        <span className="fn">{`${props.givenName} ${props.surname}`}</span>
        <img className="photo" src={avatarUrl} alt="hcard owner"></img>
      </div>
      <div className="hcard-preview__content">
        <PreviewField
          label="Email"
          text={props.email}
          hCardProperty="email"
        />
        <Line />
        <PreviewField
          label="Phone"
          text={props.phone}
          hCardProperty="tel"
        />
        <Line />
        <div className="adr">
          <PreviewField
            label="Address"
            text={`${props.streetNumber} ${props.streetName}`}
            hCardProperty="street-address"
          />
          <Line />
          <PreviewField
            label=""
            text={suburbState}
            hCardProperty="locality region"
          />
          <Line />
          <div className="hcard-preview__row">
            <PreviewField
              className="hcard-preview__preview-field"
              label="Postcode"
              text={props.postcode}
              hCardProperty="postal-code"
            />
            <PreviewField
              className="hcard-preview__preview-field"
              label="Country"
              text={props.country}
              hCardProperty="country-name"            
            />
          </div>
          <Line />
        </div>
      </div>
    </div>
  );
}

HcardPreview.propTypes = {
  /*
   * CSS class applied to the component
   */
  className: PropTypes.string,

  /*
   * given name entered in form
   */
  givenName: PropTypes.string,

  /*
   * surname entered in form
   */
  surname: PropTypes.string,

  /*
   * image uploaded through form
   */
  photo: PropTypes.string,

  /*
   * email entered in form
   */
  email: PropTypes.string,

  /*
   * phone numbered entered in form
   */
  phone: PropTypes.string,

  /*
   * street number entered in form
   */
  streetNumber: PropTypes.string,

  /*
   * street name entered in form
   */
  streetName: PropTypes.string,

  /*
   * suburb entered in form
   */
  suburb: PropTypes.string,

  /*
   * state details entered in form
   */
  region: PropTypes.string,

  /*
   * postcode entered in form
   */
  postcode: PropTypes.string,

  /*
   * country details entered in form
   */
  country: PropTypes.string,
};

HcardPreview.displayName = 'HcardPreview';

export default HcardPreview;
