import React,{ Component } from "react"
import { connect } from 'react-redux';
import {
    inputValue,
    searchButton,
    viewLocation
} from "../../Stores/Search/action";

class Search extends Component {

    render() {
        const { inputValue,searchButton,viewLocation } = this.props;
        const { searchState:{ cityData } } = this.props;
        let url;
        const searchCountry = cityData.map((data,index) => {
           if (data.logo !== null){
                url = data.logo.url
           }
            return(
                <div className="searchCountry" key={ index }>
                    <h3>
                    { data.name.text }
                    </h3>
                    <div className="countryImage">
                        <img src={ url } alt="london"/>
                    </div>
                    <span className="viewLocation"
                          id={ data.id }
                          onClick={ viewLocation }>
                        View Location
                    </span>
                </div>)
        });
        return (
            <>
                 <div className="logIn">
                     <h1>Search you favorite country</h1>
                     <input type="text" onChange = { inputValue }/>
                     <button onClick={ searchButton }>Search</button>
                 </div>
                <div className="searchCountrySection">{ searchCountry }</div>
            </>
        )
    }
}

export default connect(
    state => ({
        searchState: state.search,
    }),
    {
        inputValue,
        searchButton,
        viewLocation
    }
) (Search);
