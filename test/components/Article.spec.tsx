import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Article from '../../src/components/Article'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { pageTitle } from '../../src/stylesheets/style.css'

Enzyme.configure({ adapter: new Adapter() });

describe('<Article />', () => {
  it('including title', () => {
    const wrapper = shallow(<Article title="article title" />)

    expect(wrapper.text()).to.contains('article title')
  })
})
