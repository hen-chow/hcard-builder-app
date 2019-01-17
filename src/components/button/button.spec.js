import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './button';

describe('<Button />', () => {
  it('adds the provided CSS class', () => {
    const button = shallow(<Button className="this-is-a-test-class" />);

    const classWrapper = button.find('.this-is-a-test-class');

    expect(classWrapper.length).toEqual(1);
  });

  it('adds the provided id', () => {
    const button = shallow(<Button id="this-is-a-test-id" />);

    const idWrapper = button.find('#this-is-a-test-id');

    expect(idWrapper.length).toEqual(1);
  });

  it('renders provided children', () => {
    const button = shallow(<Button>This is a test button</Button>);

    expect(button.text()).toEqual('This is a test button');
  });

  it('invokes the provided onClick callback when user clicks on button', () => {
    const onClickCallback = jest.fn();
    const button = shallow(<Button onClick={onClickCallback} />);
    
    button.simulate('click');
    
    expect(onClickCallback.mock.calls.length).toEqual(1);
    expect(onClickCallback.mock.calls[0][0]).toEqual({
      buttonType: 'button',
      color: 'light-blue',
      onClick: onClickCallback,
    });
  });
  
  it('renders the expected HTML', () => {
    const onClickCallback = jest.fn();
    const button = renderer
      .create(<Button onClick={onClickCallback} />)
      .toJSON();

    expect(button).toMatchSnapshot();
  });
});
