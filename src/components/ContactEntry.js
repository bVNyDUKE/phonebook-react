import React from 'react'

const ContactEntry = ({entry, index}) =>{
    return(
        <div className={"ui centered card " + index}>
            <div className="content">
                <div className="header">
                    {entry.first_name} {entry.last_name}
                    <span className="right floated icon">
                        <i className="icon outline building"></i>
                    </span>
                </div>
            </div>
            <div className="meta">
                {entry.number}
            </div>
            <div className="extra content">
                <div className="ui small basic icon buttons attached">
                    <button className="ui basic button">
                        <i className="edit icon"></i>
                    </button>
                    <button className="ui basic button">
                        <i className="trash icon"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactEntry