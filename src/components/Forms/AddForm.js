import React, { useState } from "react"
import FormField from "./FormField"
import FormInput from "../Hooks/FormInput"

const FormInputs = ({ setContacts, open, setOpen }) => {
    const name = FormInput("")
    const surname = FormInput("")
    const phone = FormInput("")
    const [category, setCategory] = useState("Home")

    function saveContact() {
        if (name.valid && surname.valid && phone.valid) {
            setContacts((oldList) => {
                const newContact = [
                    {
                        id: Number(oldList.length + 1),
                        name: name.value,
                        surname: surname.value,
                        number: phone.value,
                        category: category,
                    },
                ]

                const newList = oldList.concat(newContact)
                localStorage.setItem("contacts", JSON.stringify(newList))
                return newList
            })
            setOpen(false)
        } else {
            console.log("Invalid data")
        }
    }

    const style = open ? null : { display: "none" }

    return (
        <div className="ui centered card" style={style}>
            <div className="content">
                <div className="ui form">
                    <FormField data={name} label="Name"></FormField>
                    <FormField data={surname} label="Surname"></FormField>
                    <FormField data={phone} label="Phone"></FormField>
                    <div className="inline fields">
                        <div className="ui radio">
                            <input
                                type="radio"
                                value="Home"
                                checked={category === "Home"}
                                onChange={() => setCategory("Home")}
                            />
                            <label>
                                Home <i className="home icon"></i>
                            </label>
                        </div>
                        <div className="ui radio">
                            <input
                                type="radio"
                                value="Work"
                                checked={category === "Work"}
                                onChange={() => setCategory("Work")}
                            />
                            <label>
                                Work <i className="building icon"></i>
                            </label>
                        </div>
                    </div>
                    <div className="ui buttons attached">
                        <button
                            className="ui blue button"
                            onClick={() => saveContact()}
                        >
                            Create
                        </button>
                        <button
                            className="ui red button"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AddEntryForm = ({ setContacts }) => {
    const [open, setOpen] = useState(false)

    const buttonClass = open ? "minus icon" : "plus icon"

    return (
        <div className="ui basic content center aligned segment">
            <button
                className="ui basic button icon"
                onClick={() => setOpen(!open)}
            >
                <i className={buttonClass} />
            </button>
            <FormInputs
                setContacts={setContacts}
                open={open}
                setOpen={setOpen}
            ></FormInputs>
        </div>
    )
}

export default AddEntryForm
