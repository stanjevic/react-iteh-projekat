import Meeting from './Meeting'

const Meetings = ({meetings}) => {

    return (
    <>
    {meetings.map((meeting)=>(
    <Meeting key={meeting.id} meeting={meeting}/>
    ))}
    </>
    )
}

export default Meetings
