import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  /**
   * @description handler for when user clicks on the component
   */
  onClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props);
    }
  }

  render() {
    const classes = classNames('button', this.props.className, `button--${this.props.color}`);

    if (this.props.buttonType === 'submit') {
      return (
        <button
          type="submit"
          id={this.props.id}
          className={classes}
          onClick={this.onClick}
        >
          {this.props.children}
        </button>
      )
    }

    return (
      <button
        type="button"
        id={this.props.id}
        className={classes}
        onClick={this.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  /**
   * unique Id for the component
   */
  id: PropTypes.string,

  /**
   * css classes applied on the component
   */
  className: PropTypes.string,

  /**
   * color of the component
   */
  color: PropTypes.oneOf(['grey', 'light-blue']),

  /**
   * any children rendered in the component
   */
  children: PropTypes.string,

  /**
   * the type of button
   */
  buttonType: PropTypes.oneOf(['submit', 'button']),
};

Button.defaultProps = {
  color: 'light-blue',
  buttonType: 'button',
}

Button.displayName = 'Button';

export default Button;
