import Header from './components/Header'
import Meetings from './components/Meetings'
import {useState, useEffect} from 'react'
import AddMeeting from './components/AddMeeting'

const App = ()=> {
  const [showAddMeeting, setShowAddMeeting]=useState(false)
  const [meetings, setMeetings]=useState([])


  useEffect(()=>{
    const getMeetings=async()=>{
      const meetingsFromServer=await fetchMeetings()
      setMeetings(meetingsFromServer) 
    }
    
    getMeetings()

  }, [] )

  //Fetch meetings
  const fetchMeetings=async()=>{
    const res=await fetch('http://localhost:5000/meetings')
    const data =await res.json()

   return data
  }


    //Add Meeting
    const addMeeting= async(meeting)=>{
      const res= await fetch(`http://localhost:5000/meetings`,
     { 
       method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(meeting)
    })

    const data=await res.json()

    setMeetings([...meetings, data])

  }

    //Delete Meeting

    const deleteMeeting= async (id)=>{
      await fetch(`http://localhost:5000/meetings/${id}`,
      {
        method:'DELETE'
      })

      setMeetings(meetings.filter((meeting)=>
      meeting.id!==id))
    }

    //Toggle Reminder 

    const toggleReminder=(id)=>{

      setMeetings(meetings.map((meeting)=>meeting.id===id ?
       {...meeting, reminder:!meeting.reminder}: meeting))

    }


      return (
    <div className='container'>

      <Header 
      onAdd={()=>setShowAddMeeting(!showAddMeeting)}
      showAdd={showAddMeeting}
      />

     {showAddMeeting && <AddMeeting onAdd={addMeeting} /> }
      {meetings.length>0 ? <Meetings meetings={meetings} 
      onDelete={deleteMeeting}
      onToggle={toggleReminder}
      /> : 'Nema unijetih sastanaka'}
    </div>

  )
}

export default App;
