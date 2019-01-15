import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import avatarImage from 'assets/avatar.png';
import './hcard-preview.scss';

const HcardPreview = (props) => {
  const classes = classNames('hcard-preview', 'vcard', props.className);

  const avatarUrl = !props.photo ? avatarImage : props.photo;

  return (
    <div className={classes}>
      <div className="hcard-preview--header">
        <span className="given-name">{props.givenName}</span>
        <span className="surname">{props.surname}</span>
        <img className="photo" src={avatarUrl} alt="hcard owner"></img>
      </div>
      <label>Email</label><div className="email">{props.email}</div>
      <label>Phone</label><div className="tel">{props.phone}</div>
      <div className="adr">
        <div className="street-address">{`${props.streetNumber} ${props.streetName}`}</div>
        <span className="locality">{props.suburb}</span><span className="region">{props.state}</span>
        <div className="postal-code">{props.postcode}</div>
        <div className="country-name">{props.country}</div>
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
