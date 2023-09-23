import { useEffect, useState } from 'react';
import './index.css';
import Form from './Form';
import List from './List';
import Table from './Table';
function App() {
  const [resourceType,setResourceType] = useState('users');
  const [items,setItems] = useState([]);

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
    
  
  },[resourceType])
  
  return (
  <>
  
      
<Form resourceType={resourceType} setResourceType={setResourceType}/>
<h1>{resourceType}</h1>
 {/*    <List items={items}/>
     */}
     <Table items={items}/>
  </>
      
  )

  }
export default App;
