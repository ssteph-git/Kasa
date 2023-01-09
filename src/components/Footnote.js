import React, { Component } from 'react';

export default class Footnote extends Component {

    render() {
        return (
            <footer>
                <div className="footer_global">
                    <img src="/assets/LOGO_footer.png" alt="Logo du site web" className="logo_footer"/>
                    <p className="p_footer">© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        )
    }
}