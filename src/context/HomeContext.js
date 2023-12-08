import React, { createContext, useState } from 'react'

const HomeContext = createContext();
export const HomeProvider = ({children})=>{
  const [auth,setauth] = useState({user:{id:1,username:"pradeepkumar",last_login:"",email:"rpkiit2022@gmail.com"},"access_token":"","refresh_token":""})
  const [EachUsersMessages,setEachUsersMessages] = useState([])
  const [SelectedName,setSelectedName] = useState(false)
  const ContextData = {
    auth,
    setauth,
    EachUsersMessages,
    setEachUsersMessages,
  }
  return (
    <HomeContext.Provider value={ContextData}>
      {children}
    </HomeContext.Provider>
  )
}
export default HomeContext