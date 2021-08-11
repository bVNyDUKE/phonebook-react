import React, { useState } from "react"
import EditForm from "./Forms/EditForm"
import useFormInput from "./Hooks/FormInput"

const Phonebook = ({ data, setContacts }) => {
    return (
        <div className="ui container">
            <Header />
            {data.map((contact) => (
                <ContactEntry
                    entry={contact}
                    key={contact.id}
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
            <a class="item" href="/">
                All
            </a>
            <a class="item" href="/work">
                Work
            </a>
            <a class="item" href="/home">
                Home
            </a>
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
