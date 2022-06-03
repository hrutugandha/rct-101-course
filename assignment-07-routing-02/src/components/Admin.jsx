import React from 'react'
import AuthContext from '../context/AuthContext'

const Admin = () => {
    const {handleSignout} = React.useContext(AuthContext)
    return (
        <React.Fragment>
            <h1> This is the admin page with some confedential information </h1>
            <p> Number of sales : 2 </p>
            <p> Number of users : 100 </p>
            <button onClick = {handleSignout} > Sign Out </button>
        </React.Fragment>
    );
}


export default Admin
