import { Component } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

//클래스 형태
//include 할 때 좋아요!

class Test4 extends Component {
    render () {
        return (
            <div className="App">
                <Test1 />
                <Test2 />
                <Test3 />
            </div>
        );
    }
}

export default Test4;