import React, {useState} from 'react'
import EditForm from './Forms/EditForm'
import useFormInput from './Hooks/FormInput'

const Phonebook = ({data, update}) => {

    return(
    <div className="ui container">
    {data.map( contact => <ContactEntry entry={contact} key={contact.id} update={update}></ContactEntry>)}
    </div>)

}

const ContactEntry = ({entry, update}) =>{
    const [isEditing, setIsEditing] = useState(false)
    const name = useFormInput(entry.name)
    const surname = useFormInput(entry.surname)
    const phone = useFormInput(entry.number)

    function deleteEntry(entry, update){
        update( oldList => {
            const newList = oldList.filter( x => x.id !== entry.id)
            localStorage.setItem('contacts', JSON.stringify(newList))
            return newList
        })
    }

    return(
        <div className={"ui centered card "}>
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
                    <button className="ui basic button" onClick={() => deleteEntry(entry, update)}>
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
            update={update}
            id={entry.id}
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

export default Phonebook