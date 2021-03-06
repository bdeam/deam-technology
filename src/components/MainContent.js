import React from 'react'
import './MainContent.css'

function MainContent() {
return (
    <div>
        <div className="ui center aligned raised very padded text container segment">
            <center><h2 className="ui header">  <a href="mailto:bradleydeam@gmail.com?subject=Yo!&body=I got your email from your website..." target="_blank" rel="noopener noreferrer">Bradley Deam</a></h2></center>
                <div className="row">
                    <div className="column">
                        <a href='https://github.com/bdeam' target="_blank" rel="noopener noreferrer">
                            <img alt="github octocat" className="ui mini image" src={require('../images/github-sociocon.png')} />
                        </a>
                    </div>
                    <div className="column">                     
                        <a href='https://www.linkedin.com/in/bradley-deam/' target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin logo" className="ui mini image" src={require('../images/linkedin.png')}/>
                        </a>                
                    </div>
                </div>
                <p>Just a noob trying to figure out how to build web applications</p> 
        </div>    
    </div>
    )
}

export default MainContent