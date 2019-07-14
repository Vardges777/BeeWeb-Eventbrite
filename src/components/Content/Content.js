import React,{ Component } from "react";
import Search from "../Search/Search";
import GoogleMap from "../GoogleMap/GoogleMap"

class Content extends Component {
    render(){
        return(
            <div className="content">
                <Search/>
                <GoogleMap/>
            </div>
        )
    }
}

export default Content
