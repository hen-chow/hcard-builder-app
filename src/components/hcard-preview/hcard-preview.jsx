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
          <label className="hcard-preview__label">Address</label>
          <div className="street-address">{`${props.streetNumber} ${props.streetName}`}</div>
          <Line />
          <span className="locality">{props.suburb}
          </span><span className="region">{props.state}</span>
          <label className="hcard-preview__label">Postcode</label>
          <span className="postal-code">{props.postcode}</span>
          <label className="hcard-preview__label">Country</label>
          <span className="country-name">{props.country}</span>
          <Line />
        </div>
      </div>
    </div>
  );
}

HcardPreview.propTypes = {
  className: PropTypes.string,
  givenName: PropTypes.string,
  surname: PropTypes.string,
  photo: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  streetNumber: PropTypes.string,
  streetName: PropTypes.string,
  suburb: PropTypes.string,
  region: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};

HcardPreview.displayName = 'HcardPreview';

export default HcardPreview;
