import {useState} from 'react'

const AddMeeting = () => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)


    return (

      <form className='add-form'>
<div className='form-control'>
    <label>Sastanak</label>
    <input type='text' placehodler='Unesi sastanak' value={text} 
    onChange={(e)=>setText(e.target.value)}/>
</div>

<div className='form-control'>
    <label>Datum i vrijeme</label>
    <input type='text' placehodler='Unesi vrijeme i mjesto'value={day} 
    onChange={(e)=>setDay(e.target.value)}/>
</div>

<div className='form-control form-control-check'>
    <label>Dodaj podsetnik</label>
    <input type='checkbox' value={reminder} 
    onChange={(e)=>setReminder(e.currentTarget.checked)}/>
</div>

<input type='submit' value='Sačuvaj sastanak' className='btn btn-block'/>
      </form>
      
    )
}

export default AddMeeting
