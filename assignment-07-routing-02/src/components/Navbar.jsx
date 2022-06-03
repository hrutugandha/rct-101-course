import React from 'react'
import {AuthContext} from '../context/AuthContext'
import {Redirect} from 'react-router-dom'
import Admin from '../components/Admin'

export const Dashboard = () => {
  const {isAuth} = React.useContext(AuthContext);
  return isAuth?(
      <div>
          Dashboard
          <Admin/>
      </div>
  ): (
       <Redirect to={"/login"}  />
  )
};

