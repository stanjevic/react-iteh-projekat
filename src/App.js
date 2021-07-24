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
    //Delete Meeting function

    const deleteMeeting=(id)=>{
      setMeetings(meetings.filter((meeting)=>meeting.id!==id))
    }

      return (
    <div className='container'>
      <Header />
      {meetings.length>0 ? <Meetings meetings={meetings} 
      onDelete={deleteMeeting}/> : 'Nema unijetih sastanaka'}
    </div>

  )
}

export default App;
