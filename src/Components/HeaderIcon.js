import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderIcon() {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={['fas', 'camera']} />
            <FontAwesomeIcon icon={['fas', 'th']} />
            <FontAwesomeIcon icon={['fas', 'bell']} />
        </div>
    )
}

export default HeaderIcon
