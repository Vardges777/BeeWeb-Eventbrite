import React,{ Component } from 'react';
import { Provider } from "react-redux";
import  store from "./store";
import Welcome from "./components/Welcome/Welcome"
import './assets/stylesheets/styles.scss';

class  App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <div className="App">

                    <Welcome/>
                </div>
            </Provider>
        );
    }
}


export default App
