import './App.css'
import axios from "axios"

import {useState} from "react"


function App() {



  
  const [search, setSearch] = useState('...Carregando')
  const [nome, setNome] = useState('...Carregando')
  const [foto, setFoto] = useState('')
  const [bio, setBio] = useState('...Carregando')
  const[login, setLogin] = useState('')

  
  
  const handleSearch  = () =>{

   try{axios.get(`https://api.github.com/users/${search}`).then(response =>{
    console.log(response.data);
    setNome(response.data.name); 
    setFoto(response.data.avatar_url);
    setBio(response.data.bio);
    setLogin(response.data.login);

    console.log(`seu nome é ${nome}`);
  })} catch (error){
    console.log(error)
  }
  }

  return (
    <div className="container-app">
      <div className="container">
        <header className='header-top'>
          <h1>Henrique barbosa Project</h1>
        </header>
        <main>
          <div className="form">
            <h1>Buscador de perfis Github</h1>
            <input type="text" placeholder="Insira um perfil do Gighub" onChange={(e)=> setSearch(e.target.value)}/>
            <div className='buttons'>
            <button onClick={handleSearch}>Buscar</button>
            <a href={`https://github.com/${login}`} target='_blank'><button>ir Para</button></a>
            </div>
          </div>
          <div className="content">
            <div>
              <img src={foto} alt="IMAGEM GITHUB" />
              <h1>{nome}</h1>
              <h2>{login}</h2>
              <p><br></br>{bio}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
