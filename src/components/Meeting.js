import {FaTimes} from 'react-icons/fa'

const Meeting = ({meeting, onDelete}) => {
    return (
        <div className='meeting'>
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
