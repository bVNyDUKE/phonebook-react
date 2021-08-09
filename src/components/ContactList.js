import ContactEntry from './ContactEntry'

const ContactList = ({data, update}) => {

    return(
    <div className="ui container">
    {data.map( contact => <ContactEntry entry={contact} key={contact.id} update={update}></ContactEntry>)}
    </div>)

}

export default ContactList