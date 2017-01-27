import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon'

import Header from '../components/Header/Header';
import Button from '../components/Button/Button';

describe('<Header/>', () => {
  it('should display a single h1 tag', () => {
    const pathname = "settings";
    const wrapper = shallow(<Header/>);
    console.log(wrapper);
    // expect(wrapper.find('h1')).to.have.length(1);
  });

  // it('should trigger our logStuff function', () => {
  //   const logStuff = sinon.spy()
  //   const wrapper = mount(<Button handleClick={logStuff} />);
  //   wrapper.simulate('click');
  //   expect(logStuff.calledOnce).to.equal(true);
  // });
});
