import React from "react";
import FormField from "./FormField";

const EditForm = ({ name, surname, phone, editing, id, update }) => {
	function saveData(update) {
		update((oldList) => {
			const newList = oldList.map((item) => {
				if (item.id === id) {
					const updatedItem = {
						...item,
						name: name.value,
						surname: surname.value,
						number: phone.value,
					};
					return updatedItem;
				}
				return item;
			});
			localStorage.setItem("contacts", JSON.stringify(newList));
			return newList;
		});
		editing.onChange(false);
	}

	return (
		<div className="content">
			<div className="ui form">
				<FormField data={name} label="Name"></FormField>
				<FormField data={surname} label="Surname"></FormField>
				<FormField data={phone} label="Phone"></FormField>
				<div className="ui attached buttons">
					<button
						className="ui green button"
						onClick={() => saveData(update)}
					>
						Save
					</button>
					<button
						className="ui red button"
						onClick={() => editing.onChange(false)}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditForm;
