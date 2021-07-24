import Meeting from './Meeting'

const Meetings = ({meetings, onDelete, onToggle}) => {

    return (
    <>
    {meetings.map((meeting)=>(
    <Meeting key={meeting.id} meeting={meeting}
    onDelete={onDelete} onToggle={onToggle}/>
    ))}
    </>
    )
}

export default Meetings
