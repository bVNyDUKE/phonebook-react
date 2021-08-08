import ContactEntry from './ContactEntry'

const ContactList = ({data}) => {

    return(
    <div className="ui container">
    {data.map( (contact, index) => <ContactEntry entry={contact} index={index}></ContactEntry>)}
    </div>)

}

export default ContactList