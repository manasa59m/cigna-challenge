import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SearchComponent from "../SearchComponent";

describe("SearchComponent", () => {
  it("should render without crash", () => {
    const wrapper = shallow(<SearchComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should call onChange function on text change in search box", () => {
      const mockHandleSearchInputValue = jest.fn();
    const wrapper = shallow(<SearchComponent onSearch={mockHandleSearchInputValue}/>);
    wrapper.find("#searchId").props().onChange({ target: { value: "su" } });
    expect(mockHandleSearchInputValue).toBeCalledWith({ target: { value: "su" } });
  });
});
