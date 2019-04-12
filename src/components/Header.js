import React from 'react'

function Header() {
return (
    <div className="ui stackable menu">
    <div className="item">
        <i className="beer icon"/>
        <i className="au flag" />
    </div>
    <a className="item" href="#">Home</a>
    {/* <a className="item">About</a> */}
    <a className="item" href="mailto:bradleydeam@gmail.com?subject=Yo!&body=I got your email from your website..." target="_blank" rel="noopener noreferrer">Contact</a>
    </div>
    )
}

export default Header