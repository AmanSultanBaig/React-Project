import React, { Component } from 'react';

class Heading extends Component {
    render() {
        return (
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>

        );
    }
}

export default Heading;