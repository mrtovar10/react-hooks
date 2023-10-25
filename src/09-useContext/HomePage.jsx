import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext";


export const HomePage = () => {

  const { user } = useContext( UserContext );

  // useEffect (()=>{
  //   setTimeout(()=>{
  //     setUser({ id: 123, name: 'Maxi', email: 'maxi@google.com' })
  //   },2000)
  // },[])

    return (
      <>
          <h1>HomePage <small>{ user?.name }</small> </h1>
          <hr />

          <pre>
            { JSON.stringify( user, null, 3 ) }
          </pre>
      </>
    )
  }
  