import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Hashids from 'hashids';

function App() {  

  const [id, setId] = useState('');
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [newUrl, setNewUrl] = useState('');
  
  const SITE_URL = 'https://c2g.su/';

  function setNewId() {
    let newId = uuidv4();
    setId(newId);
    let convert = new Hashids(newId.substring(0, 8)).encode(1, 2, 3);
    setNewUrl(SITE_URL + convert)
  }  

  let json = {
    id: id,
    base_url: url,
    name: name, 
    type: type       
  }  

  return (
    <div className='container'>

      <div>
        <input 
          value={id} 
          onChange={e => setId(e.target.value)} 
          onBlur={() => setNewId()}
        />
        <button onClick={() => setNewId()}>Сгенерировать</button>
      </div>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value='Вакансия'>Вакансия</option>
        <option value='Мероприятие'>Мероприятие</option>
        <option value='Проект'>Проект</option>
        <option value='Услуга'>Услуга</option>
        <option value='Ссылка'>Ссылка</option>
      </select>

      <label htmlFor="url">URL для ссылки:</label>
      <input 
        id="url"
        value={url} 
        onChange={e => setUrl(e.target.value)}  
      />

      <label htmlFor="name">Название:</label>
      <input 
        id="name"
        value={name} 
        onChange={e => setName(e.target.value)}        
      />

      <span id="link">{newUrl}</span>
      <button>Сохранить</button>

      <span id="json">{JSON.stringify(json)}</span>

    </div>
  );
}

export default App;
