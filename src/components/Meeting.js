const Meeting = ({meeting}) => {
    return (
        <div className='meeting'>
            <h3>{meeting.text}</h3>
            <p>{meeting.day}</p>
            
        </div>
    )
}

export default Meeting
