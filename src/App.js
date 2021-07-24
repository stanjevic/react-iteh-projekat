import Header from './components/Header'
import Meetings from './components/Meetings'
import {useState} from 'react'

function App() {
  const [meetings, setMeetings]=useState([
    {
        id:1,
         text: 'Prvi sastanak',
         day: '05.Avgust u 14:30',
         reminder:true,
    },
    {
        id:2,
         text: 'Drugi sastanak',
         day: '06.Avgust u 14:30',
         reminder:true,
    },
    
    {
        id:3,
         text: 'Treci sastanak',
         day: '07.Avgust u 14:30',
         reminder:true,
    },
    
    ])
  return (
    <div className='container'>
      <Header />
      <Meetings meetings={meetings}/>
    </div>

  );
}

export default App;
