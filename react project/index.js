import React from "react"
import ReactDOM from "react-dom"



import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (

        <header>
            <nav className= "nav">
                <img  src="./react-logo.png" className="logo"/>

                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </nav>
    </header>
    
    )
}



function NewPage() {
    return (
<div>

            <Header />
            <MainContent />
             <Footer />

</div>)}

function MainContent() {
    return (
        <div>

            <h1> Reasons Im excited to learn React</h1>
   
            <ol>
                <li>Can start learning more about React</li>
                <li>Can start learning more about React</li>
                <li>Can start learning more about React</li>
                </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
        "© 20xx Lopez development. All rights reserved.
        </footer>
    )}




ReactDOM.render(<NewPage />, document.getElementById("root"))