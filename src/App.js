import React, {Component} from "react";
import SchemeColor from "./components/SchemeColor/";
import './App.css';

class App extends Component {

    render() {
        return (
            <div className={`container`}>
                <h1>Hello Light / Dark Mode </h1>
                <SchemeColor />
                <p> whot now?</p>
            </div>
        )
    }
}

export default App;