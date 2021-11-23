import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function SearchInput() {
    return (
        <div className="search">
            <input type="text" placeholder="Search..." className="search-input"/>
            <FontAwesomeIcon icon={['fas', 'search']} className="search-icon" />
        </div>
    )
}

export default SearchInput
