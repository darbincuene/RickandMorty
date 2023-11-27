import { useState, useEffect } from 'react'

import { getAllcharacters } from '../api/httprequest'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../app/app.css'


function App() {
  const [character, setCharacter] = useState([])
  useEffect(() => {
    const getCharacterDataRequest = async () => {
      const characterData = await getAllcharacters()
      setCharacter(characterData)
    }
    getCharacterDataRequest()
  })

  return (
    <>
    <div className='body'>
     <h1 className='text-center texto'>rick and morty</h1>

<div className="br">
  
{
  character.map((item) => (
    
    <div className="pu" style={{ width: '18rem' }} key={item.id}>
      <img src={item.image} className="card-img-top " alt="..." />
      <div className="dar hover">
        <h5 className="card-title name">{item.name}</h5>
        <h3>genero:{item.gender}</h3>    
        <h3>especie:{item.species}</h3>
        <h3>estado:{item.status}</h3>  
      </div>
    </div>
  ))
}
</div>
</div>
    </>
  )
}

export default App
