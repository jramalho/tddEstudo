/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App', () => {
  describe('#Text', () => {
    it('should render the word "Length" in testId rectangleLengthText', () => {
      const app = shallow(<App />);
      const text = app.find("[testID='rectangleLengthText']").dive().getElement().props.children;
      expect(text).toEqual('Length');
    });

    it('should render the word "Width" in testId rectangleWidthText', () => {
      const app = shallow(<App />);
      const text = app.find("[testID='rectangleWidthText']").dive().getElement().props.children;
      expect(text).toEqual('Width');
    });

  });
  describe('#TextInput', () => {
    it('should render the input in testId rectangleLengthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleLengthInput']");
      expect(input).toHaveLength(1);
    });

    it('should render the input in testId rectangleWidthInput', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleWidthInput']");
      expect(input).toHaveLength(1);
    });
  });

  describe('#TouchableHighlight', () => {
    it('should render the button with testID rectangleAreaButton', () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']");
      expect(button).toHaveLength(1);
    });

    it('should render the button with testID rectangleAreaButton and text "calculate"', () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']").dive().contains("Calculate");
      expect(button).toEqual(true);
    });
  });
});