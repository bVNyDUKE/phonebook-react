import React from 'react'

const EditForm = ({name, surname, phone, editing, id, update}) => {

    function saveData(update){
        update( oldList => {
            const newList = oldList.map( item => {
                if(item.id === id){
                    const updatedItem = {...item, name: name.value, surname: surname.value, number: phone.value}
                    return updatedItem
                }
                return item
            })
            localStorage.setItem('contacts', JSON.stringify(newList))
            return newList
        })
        editing.onChange(false)
    }

    return (
    <div className="content">
        <div className="ui form">
            <Field data={name} label='Name'></Field>
            <Field data={surname} label='Surname'></Field>
            <Field data={phone} label='Phone Number'></Field>
            <div className='ui attached buttons'>
                <button className='ui green button' onClick={() => saveData(update)}>
                    Save
                </button>
                <button className='ui red button' onClick={() => editing.onChange(false)}>
                    Cancel
                </button>
            </div>
        </div>
    </div>
    )
}

const Field = ({data, label}) => (
    <div className="field">
        <label>{label}</label>
        <input type="text" value={data.value} onChange={data.onChange}></input>
    </div>
)

export default EditForm