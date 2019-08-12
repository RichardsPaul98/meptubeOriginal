import React from 'react'

const style_1= {
    padding: "10px 15px"
};

function rightCorner() {
    return (
        <div>
             <br/>
             <button type="button" class="btn btn-warning custom-button-width .navbar-right" style={style_1}>Login</button>
             <span> </span>
             <button type="button" class="btn btn-danger custom-button-width .navbar-right" style={style_1}>Sign Up</button>
        </div>
    )
}

export default rightCorner
