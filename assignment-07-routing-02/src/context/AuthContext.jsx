import React from 'react'

const AuthContextProvider = ({children}) => {
  const AuthContext = React.createContext()

  const [isAuth, setIsAuth] = React.useState(false)

const handleSignout = () => {
    setIsAuth(false)
}

const handleSignin = () => {
    setIsAuth(true)
}

const value = {isAuth, handleSignin, handleSignout}

  return (
    <div>
      <AuthContext.Provider value={value}> {children} 
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
