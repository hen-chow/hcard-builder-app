import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './line.scss';

const Line = ({ className, id, size }) => {
  const classes = classNames('line', `line--${size}`, className);

  return (
    <hr className={classes} id={id} />
  );
};

Line.propTypes = {
  /**
   * Component `id`
  */
  id: PropTypes.string,

  /**
  * CSS classes to be added to the component.
  */
  className: PropTypes.string,

  /**
   * Renders component visually larger or smaller.
   */
  size: PropTypes.oneOf(['small', 'large']),
};

Line.displayName = 'Line';

Line.defaultProps = {
  size: 'small',
};

export default Line;
