import { useState } from 'react'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (

      <div>
      <div className='container'>

          <form>
          <h1>Cadastro de Usuários</h1>
          <input name='nome' type='text/'></input>
          <input name='idade' type='number/'></input>
          <input name='email' type='email/'></input>
          <button type='button'>Cadastrar</button>
        </form>
            
    </div>
      </div>
     
      

      
 
  )
}

export default Home
