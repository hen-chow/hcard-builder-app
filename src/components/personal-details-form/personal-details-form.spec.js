import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PersonalDetailsForm from './personal-details-form';

describe('<PersonalDetailsForm />', () => {
  it('invokes the provided onInputChange callback when input changes', () => {
    const onInputChangeCallback = jest.fn();
    const personalDetailsForm = shallow(<PersonalDetailsForm onInputChange={onInputChangeCallback} />);
    
    personalDetailsForm.find('#givenNameInput').simulate('change', { target: { value: 'Hello' } });
    
    expect(onInputChangeCallback.mock.calls.length).toEqual(1);
    expect(onInputChangeCallback.mock.calls[0][0]).toEqual({ target: { value: 'Hello' } });
  });
  
  it('renders the expected HTML', () => {
    const onInputChangeCallback = jest.fn();
    const personalDetailsForm = renderer
      .create(<PersonalDetailsForm onInputChange={onInputChangeCallback} />)
      .toJSON();

    expect(personalDetailsForm).toMatchSnapshot();
  });
});
