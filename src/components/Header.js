import React, { Component } from 'react';

class Header extends Component {
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

export default Header;