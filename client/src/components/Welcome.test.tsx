import * as React from "react";
import { shallow } from "enzyme";
import {Welcome} from "./Welcome";

describe("App", () => {
    const app = shallow(<Welcome />);
    it("renders properly", () => {
        expect(app).toMatchSnapshot();
    });
    // it("Contains a connected wallet component", () => {
    //     // console.log(app.debug());                   // Uncheck to observe why it's Connect(Wallet) not Wallet component
    //     expect(app.find("Connect(Wallet)").exists()).toBe(true);
    // });
});