import react, { useState } from "react"
import './header.css'
export const Header = () => {
    return (
        <div className="headercomp">
            <div className="headerMenu">
                <div className="left">
                    <p>ModernMeals</p>
                </div>
                <div className="right">
                    <p>Add Restaurant</p>
                    <p>Login</p>
                    <p>Sign up</p>

                </div>
            </div>
        </div>
    )


}