import React, { useState } from "react"
import EditForm from "./Forms/EditForm"
import useFormInput from "./Hooks/FormInput"
import { Link } from "react-router-dom"

const Phonebook = ({ contacts, setContacts }) => {
    return (
        <div className="ui container">
            <Header />
            {contacts.map((x) => (
                <ContactEntry
                    entry={x}
                    key={x.id}
                    setContacts={setContacts}
                ></ContactEntry>
            ))}
        </div>
    )
}

const Header = () => (
    <div
        class="center aligned navigation"
        style={{ maxWidth: "300px", margin: "auto" }}
    >
        <div class="ui three item menu">
            <Link class="item" to="/">
                All
            </Link>
            <Link class="item" to="/work">
                Work
            </Link>
            <Link class="item" to="/home">
                Home
            </Link>
        </div>
    </div>
)

const ContactEntry = ({ entry, setContacts }) => {
    const [isEditing, setIsEditing] = useState(false)
    const name = useFormInput(entry.name)
    const surname = useFormInput(entry.surname)
    const phone = useFormInput(entry.number)

    function deleteEntry(entry, setContacts) {
        setContacts((oldList) => {
            const newList = oldList.filter((x) => x.id !== entry.id)
            localStorage.setItem("contacts", JSON.stringify(newList))
            return newList
        })
    }

    const showEditForm = isEditing ? (
        <EditForm
            name={name}
            surname={surname}
            phone={phone}
            setContacts={setContacts}
            id={entry.id}
            editing={{
                isEditing,
                onChange: setIsEditing,
            }}
        ></EditForm>
    ) : null

    return (
        <div className={"ui centered card "}>
            <div className="content">
                <div className="header">
                    {name.value} {surname.value}
                    <span className="right floated icon">
                        <i
                            className={
                                entry.category === "Home"
                                    ? "icon outline home"
                                    : "icon outline building"
                            }
                        ></i>
                    </span>
                </div>
                <div className="meta">{phone.value}</div>
                <div className="extra content">
                    <div className="ui small basic icon buttons attached">
                        <button
                            className="ui basic button"
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            <i className="edit icon"></i>
                        </button>
                        <button
                            className="ui basic button"
                            onClick={() => deleteEntry(entry, setContacts)}
                        >
                            <i className="trash icon"></i>
                        </button>
                    </div>
                </div>
            </div>
            {showEditForm}
        </div>
    )
}

export default Phonebook
