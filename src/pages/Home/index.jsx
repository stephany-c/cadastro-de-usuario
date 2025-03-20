
import { useEffect, useState, useRef } from 'react'
import './style.css'
import Excluir from '../../assets/excluir.png'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
  }



  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' name='nome' type='text' ref={inputName}></input>
          <input placeholder='Idade' name='idade' type='number' ref={inputAge}></input>
          <input placeholder='E-mail' name='email' type='email' ref={inputEmail}></input>
          <button type='button' onClick={createUsers} >Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button type='button' >
              <img src={Excluir} alt="Excluir usuário" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
