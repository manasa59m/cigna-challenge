import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HomePage from "../HomePage";

describe("HomePage Component", () => {
  it("should render without crash", () => {
    const wrapper = shallow(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
