import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.onClick) {
      this.onClick(this.props);
    }
  }

  render() {
    const classes = classNames('button', this.props.className, `button--${this.props.color}`);

    return (
      <button id={this.props.id} className={classes} onClick={this.onClick}>{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(['grey', 'light-blue']),
  children: PropTypes.string,
  buttonType: PropTypes.oneOf(['submit', 'button']),
};

Button.defaultProps = {
  color: 'light-blue',
  buttonType: 'button',
}

Button.displayName = 'Button';

export default Button;