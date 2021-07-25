import {useState} from 'react'

const AddMeeting = ({onAdd}) => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert ('Molimo vas unesite sastanak')
            return
        }

        onAdd({ text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (

      <form className='add-form' onSubmit={onSubmit}>
<div className='form-control'>
    <label>Sastanak</label>
    <input type='text' placeholder='Unesi sastanak' value={text} 
    onChange={(e)=>setText(e.target.value)}/>
</div>

<div className='form-control'>
    <label>Datum i vrijeme</label>
    <input type='text' placeholder='Unesi datum i vrijeme'value={day} 
    onChange={(e)=>setDay(e.target.value)}/>
</div>

<div className='form-control form-control-check'>
    <label>Dodaj podsetnik</label>
    <input type='checkbox'
    checked={reminder}
    value={reminder} 
    onChange={(e)=>setReminder(e.currentTarget.checked)}/>
</div>

<input type='submit' value='Sačuvaj sastanak' className='btn btn-block'/>
      </form>
      
    )
}

export default AddMeeting
