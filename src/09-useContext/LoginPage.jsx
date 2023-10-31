import { useContext } from 'react';
import { UserContext } from './context/UserContext';


export const LoginPage = () => {

    const { setUser } = useContext( UserContext );
    const persona = {
        id: 123456,
        name: 'Lucia Meyer',
        email: 'luo@google.com'
    }
    console.log('logiiiin')
    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre>
            { JSON.stringify( persona, null, 3 ) }
          </pre>


          <button 
            className="btn btn-primary"
            onClick={ () => setUser(persona)  }
          >
            Establecer usuario
          </button>

      </>
    )
  }
  