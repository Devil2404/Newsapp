import React, { Component } from 'react'
import '../Styles/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="box">
                        <h1>
                            About Us
                        </h1>
                        <p>
                            We gives you the daily top news of  7 different categories. After visiting our website, You get the info or knowledge that what things done in the world right now.
                        </p>
                    </div>
                    <div className="box">
                        <h1>
                            Our Motive
                        </h1>
                        <p id="motvie">
                            Whole World on Same Island
                        </p>
                    </div>
                </div>
                <div className="credit">
                    <h1>
                        Copyright @{new Date().getFullYear()} FALCON | All copyrights reserved
                    </h1>
                </div>
            </div>
        )
    }
}
