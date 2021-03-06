import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { NavbarPage } from "./NavBar";


configure({ adapter: new Adapter() });

let wrapper;

describe('test navbar', () => {
  beforeEach(()=>{
    wrapper=shallow(<NavbarPage />)
  })
  it('should match snapshot', ()=>{
    expect(wrapper).toMatchSnapshot()
  })
  it('should mock logout', () => {
    expect(wrapper.instance().LogOut)
  })
})

