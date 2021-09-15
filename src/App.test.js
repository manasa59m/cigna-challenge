import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import App from "./App";

describe("App Component", () => {
  it("should render without crash", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should contain title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".app-title").text()).toBe("CIGNA Challenge");
  });
});
