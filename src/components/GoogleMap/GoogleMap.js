import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import  cursor from "../../assets/images/cursor.png"
const AnyReactComponent = ({ text }) => <img src={cursor} width='100px' height='100px'/>;

class SimpleMap extends Component {
    static defaultProps = {
        zoom:11
    };

    render() {
        const { mapState:{ latitude,longitude } } = this.props;
        const center = {
            lat:latitude,
            lng:longitude
        };
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyDirm1-9Ld3vAy7p-o8ifDxRQYRJB18Hns"}}
                    defaultCenter={center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={ latitude }
                        lng={ longitude }
                        text="Stexa"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default connect(
    state => ({
        mapState: state.search
    }),
)(SimpleMap);
