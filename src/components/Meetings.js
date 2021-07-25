import Meeting from './Meeting'

const Meetings = ({meetings, onDelete, onToggle}) => {

    return (
    <>
    {meetings.map((meeting, index)=>(
    <Meeting 
    key={index} 
    meeting={meeting}
    onDelete={onDelete} 
    onToggle={onToggle}/>
    ))}
    </>
    )
}

export default Meetings
