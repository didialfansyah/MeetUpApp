import React from 'react'
import PropTypes from 'prop-types'

import './cardDefault.css'
const CardDefault = ({heading, link, content}) => {
    return (
        <div className="cardDefault">
            <h3>{heading}</h3>
            <a href={link}>Getting Start...</a>
            <p>
                {content}
            </p>
        </div>
    );
}

CardDefault.prototype = {
    heading : PropTypes.string,
    link : PropTypes.string.isRequired,
    content : PropTypes.string
}

CardDefault.defaultProps = {
    link : "https://www.facebook.com/mighty.didi/"
}

export default CardDefault