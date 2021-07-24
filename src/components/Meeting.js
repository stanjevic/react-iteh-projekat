import {FaTimes} from 'react-icons/fa'

const Meeting = ({meeting, onDelete, onToggle}) => {
    return (
        <div className={`meeting ${meeting.reminder ? 'reminder': ''}`} onDoubleClick={()=>
        onToggle(meeting.id)}>
            <h3>
                {meeting.text} <FaTimes style={{color:'red',
            cursor:'pointer'}} 
            onClick={()=> onDelete(meeting.id)}/>
                </h3>
            <p>{meeting.day}</p>
            
        </div>
    )
}

export default Meeting
