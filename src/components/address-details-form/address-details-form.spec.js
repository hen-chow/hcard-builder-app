import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddressDetailsForm from './address-details-form';

describe('<AddressDetailsForm />', () => {
  it('invokes the provided onInputChange callback when input changes', () => {
    const onInputChangeCallback = jest.fn();
    const addressDetailsForm = shallow(<AddressDetailsForm onInputChange={onInputChangeCallback} />);
    
    addressDetailsForm.find('#suburbInput').simulate('change', { target: { value: 'Hello' } });
    
    expect(onInputChangeCallback.mock.calls.length).toEqual(1);
    expect(onInputChangeCallback.mock.calls[0][0]).toEqual({ target: { value: 'Hello' } });
  });
  
  it('renders the expected HTML', () => {
    const onInputChangeCallback = jest.fn();
    const addressDetailsForm = renderer
      .create(<AddressDetailsForm onInputChange={onInputChangeCallback} />)
      .toJSON();

    expect(addressDetailsForm).toMatchSnapshot();
  });
});
