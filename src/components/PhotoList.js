import React, { Component } from 'react';

// import images from '../images/';

class PhotoList extends Component {
    render() {
        return (
            <div class="grid-container">
                <div class="grid-item"><img src={require('../images/2.jpeg')}/></div>
                <div class="grid-item"><img src={require('../images/3.jpeg')}/></div>
                <div class="grid-item"><img src={require('../images/4.jpeg')}/></div>
                <div class="grid-item"><img src={require('../images/6.jpg')}/></div>
                <div class="grid-item"><img src={require('../images/5.jpg')}/></div>
                <div class="grid-item"><img src={require('../images/7.jpg')}/></div>
                <div class="grid-item"><img src={require('../images/images.jpeg')}/></div>
                <div class="grid-item"><img src={require('../images/8.jpeg')}/></div>
                <div class="grid-item"><img src={require('../images/9.jpg')}/></div>
            </div>

        );
    }
}

export default PhotoList;