import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) =>{
    const [user, SetUser] = React.useState(null)
      return(
        <UserContext.Provider value={{user,setUser: SetUser}}>
          {children}
        </UserContext.Provider>
      )
}
export default UserContextProvider;