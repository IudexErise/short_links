import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Hashids from 'hashids';

function App() {  

  const [uuid, setUuid] = useState('');
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Ссылка');
  const [shortLink, setShortLink] = useState('');
  
  const SITE_URL = 'https://c2g.su/';

  function setNewId() {
    let newId = uuidv4();
    setUuid(newId);
    let hashedLink = new Hashids(newId).encode(1, 2, 3);
    setShortLink(SITE_URL + hashedLink)
  }  

  let json = {
    base_url: url,    
    category: category,    
    title: title, 
    uuid: uuid,
    short_link: shortLink      
  }  

  useEffect(() => {
    setNewId();
  }, []) 

  return (
    <div className='container'>

      <div>
        <input 
          value={uuid} 
          onChange={e => setUuid(e.target.value)} 
        />
        <button onClick={() => setNewId()}>Сгенерировать</button>
      </div>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
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

      <label htmlFor="title">Название:</label>
      <input 
        id="title"
        value={title} 
        onChange={e => setTitle(e.target.value)}        
      />

      <span>{shortLink}</span>
      <button onClick={() => alert(JSON.stringify(json))}>Сохранить</button>

      <span>{JSON.stringify(json)}</span>

    </div>
  );
}

export default App;
