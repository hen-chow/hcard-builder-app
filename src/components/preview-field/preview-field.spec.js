import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PreviewField from './preview-field';

describe('<PreviewField />', () => {
  it('adds the provided CSS class', () => {
    const previewField = shallow(<PreviewField className="test-css-class" hCardProperty="emailInput" />);

    const classNameWrapper = previewField.find('.test-css-class');

    expect(classNameWrapper.length).toEqual(1);
  });

  it('renders the provided label name', () => {
    const previewField = shallow(<PreviewField label="email" hCardProperty="emailInput" />);

    const emailLabel = previewField.find('.preview-field__label');

    expect(emailLabel.text()).toEqual('email');
  });

  it('renders the provided text', () => {
    const previewField = shallow(<PreviewField label="email" text="testy-test@email.com" hCardProperty="emailInput" />);

    const emailText = previewField.find('.preview-field__text');

    expect(emailText.text()).toEqual('testy-test@email.com');
  });

  it('adds the provided hCardProperty', () => {
    const previewField = shallow(<PreviewField hCardProperty="emailInput" />);

    const hCardPropertyWrapper = previewField.find('.emailInput');

    expect(hCardPropertyWrapper.length).toEqual(1);
  });

  it('renders the expected HTML', () => {
    const previewField = renderer
      .create(<PreviewField label="Email" text="test-person@gmail.com" hCardProperty="emailInput" />)
      .toJSON();

    expect(previewField).toMatchSnapshot();
  });
});