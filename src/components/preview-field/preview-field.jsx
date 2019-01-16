import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './preview-field.scss';

const PreviewField = (props) => {
  const textClasses = classNames('preview-field__text', props.hCardProperty);

  return (
    <div className="preview-field">
      <label className="preview-field__label">{props.label}</label>
      <span className={textClasses}>{props.text}</span>
    </div>
  );
}

PreviewField.propTypes = {
  /**
   * label of the field
   */
  label: PropTypes.string,

  /**
   * text for the field
   */
  text: PropTypes.string,

  /**
   * hCard property for the field
   */
  hCardProperty: PropTypes.string.isRequired,
};

PreviewField.displayName = 'PreviewField';

export default PreviewField;
