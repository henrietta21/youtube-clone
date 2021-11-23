import React from 'react'
import SearchInput from './SearchInput'
import Logo from './Logo'
import HeaderIcon from './HeaderIcon'

function Header() {
    return (
        <div className="Header">
            <Logo />
           <SearchInput /> 
           <HeaderIcon />
        </div>
    )
}

export default Header
