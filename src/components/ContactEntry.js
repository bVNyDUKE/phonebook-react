import React, {useState} from 'react'
import EditForm from './EditForm'

function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue)

    function handleChange(e){
        setValue(e.target.value)
    }
    return{
        value,
        onChange: handleChange
    }
}

const ContactEntry = ({entry, index}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const name = useFormInput(entry.first_name)
    const surname = useFormInput(entry.last_name)
    const phone = useFormInput(entry.number)

    return(
        <div className={"ui centered card " + index}>
            <div className="content">
                <div className="header">
                    {name.value} {surname.value}
                    <span className="right floated icon">
                        <i className={ entry.category === 'Home' ? "icon outline home" : "icon outline building" }></i>
                    </span>
            </div>
            <div className="meta">
                {phone.value}
            </div>
            <div className="extra content">
                <div className="ui small basic icon buttons attached">
                    <button className="ui basic button" onClick={() => setIsEditing(!isEditing)}>
                        <i className="edit icon"></i>
                    </button>
                    <button className="ui basic button">
                        <i className="trash icon"></i>
                    </button>
                </div>
            </div>
            </div>
            {isEditing && 
            <EditForm 
            name={name}
            surname={surname}
            phone={phone}
            editing={{
                isEditing,
                onChange: setIsEditing
            }}
            >
            </EditForm>
            }
        </div>
    )
}
    

export default ContactEntry