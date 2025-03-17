
import { useEffect } from 'react'
import './style.css'
import Excluir from '../../assets/excluir.png'
import api from '../../services/api'

function Home() {
  let users = [];
  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')
    users = usersFromApi.data
    console.log(users)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' name='nome' type='text'></input>
          <input placeholder='Idade' name='idade' type='number'></input>
          <input placeholder='E-mail' name='email' type='email'></input>
          <button type='button'>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Excluir} alt="Excluir usuário" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
