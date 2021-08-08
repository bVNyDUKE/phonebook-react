import ContactEntry from './ContactEntry'

const ContactList = ({data}) => data.map( (contact, index) => 
 <div className="ui container"><ContactEntry entry={contact} index={index}></ContactEntry></div>)


export default ContactList