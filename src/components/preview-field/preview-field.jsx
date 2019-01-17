import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './preview-field.scss';

const PreviewField = (props) => {
  const classes = classNames('preview-field', props.className);
  const textClasses = classNames('preview-field__text', props.hCardProperty);

  return (
    <div className={classes}>
      <label className="preview-field__label">{props.label}</label>
      <span className={textClasses}>{props.text}</span>
    </div>
  );
}

PreviewField.propTypes = {
  /**
   * CSS class to be applied to component
   */
  className: PropTypes.string,

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
