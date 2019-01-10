import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './hcard-preview.scss';

class HcardPreview extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const classes = classNames('hcard-preview', 'vcard', this.props.className);

    return (
      <div className={classes}>
        <div className="hcard-preview--header">
          <span className="given-name">{this.props.givenName}</span>
          <span className="surname">{this.props.surname}</span>
          <img className="photo" src={this.props.photo} alt="hcard owner"></img>
        </div>
        <label>EMAIL</label><div className="email">{this.props.email}</div>
        <label>PHONE</label><div className="tel">{this.props.phone}</div>
        <div className="adr">
          <div className="street-address">{this.props.streetAddress}</div>
          <span className="locality">{this.props.suburb}</span><span className="region">{this.props.state}</span>
          <div className="postal-code">{this.props.postcode}</div>
          <div className="country-name">{this.props.country}</div>
        </div>
      </div>
    );
  }
}

HcardPreview.propTypes = {
  className: PropTypes.string,
  givenName: PropTypes.string,
  surname: PropTypes.string,
  photo: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  streetAddress: PropTypes.string,
  suburb: PropTypes.string,
  region: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};

HcardPreview.displayName = 'HcardPreview';

export default HcardPreview;
