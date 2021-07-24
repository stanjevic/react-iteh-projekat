import Meeting from './Meeting'

const Meetings = ({meetings, onDelete}) => {

    return (
    <>
    {meetings.map((meeting)=>(
    <Meeting key={meeting.id} meeting={meeting}
    onDelete={onDelete}/>
    ))}
    </>
    )
}

export default Meetings
