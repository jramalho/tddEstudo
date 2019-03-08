/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

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

    it('should update the input value', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleLengthInput']");
      input.simulate('ChangeText', 0);
      expect(app.state().length).toEqual(0);
    });

    it('should update the input value to 100 when the input is 100', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleLengthInput']");
      input.simulate('ChangeText', 100);
      expect(app.state().length).toEqual(100);
    });

    it('should input the value to 100 of width when the input receives 100', () => {
      const app = shallow(<App />);
      const input = app.find("[testID='rectangleWidthInput']");
      input.simulate("ChangeText", 100);
      expect(app.state().width).toEqual(100);
    });
  });

  describe('#Button', () => {
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

  describe('Interaction', () => {

    it("should calculate the area, wich is 0 when the button is pressed", () => {
      const app = shallow(<App />);
      const button = app.find("[testID='rectangleAreaButton']");
      button.simulate("press");
      expect(app.state().area).toEqual(0);
    });

    it("should calculate the area with the states", () => {
      const app = shallow(<App />);
      app.setState({
        width: 10,
        length: 10
      });
      const button = app.find("[testID='rectangleAreaButton']");
      button.simulate("press");
      expect(app.state().area).toEqual(100);
    });
  });
  describe("E2E", () => {

    it('should render the value of the Calculation on the screen', () => {
      const app = shallow(<App />);
      const inputLength = app.find("[testID='rectangleLengthInput']");
      const inputWidth = app.find("[testID='rectangleWidthInput']");
      const button = app.find("[testID='rectangleAreaButton']");
      inputLength.simulate("ChangeText",10);
      inputWidth.simulate("ChangeText",10);
      button.simulate("press");
      const text = app.find("[testID='finalValue']").dive().getElement().props.children;
      expect(text).toEqual(100);
    })
  })
});

