import React, { Component } from 'react';

// import images from '../images/';

class PhotoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="grid-container">
                <div class="grid-item">
                    <img src={require('../images/2.jpeg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/3.jpeg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/4.jpeg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/6.jpg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/5.jpg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/7.jpg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/images.jpeg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/8.jpeg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>

                <div class="grid-item">
                    <img src={require('../images/9.jpg')} />
                    <hr />
                    <p>{this.props.description}</p>
                </div>
            </div>

        );
    }
}

export default PhotoList;