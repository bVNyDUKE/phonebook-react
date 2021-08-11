import { useEffect, useState } from "react";
import Phonebook from "./components/Phonebook";
import AddForm from "./components/Forms/AddForm";

function App() {
	// const [contacts, setContacts] = useState([
	//   {id: 1, name:"Herp",surname:"Derp",number:"065-65505544",category:"Work"},
	//   {id: 2, name:"Smo",surname:"Duur",number:"065-65505544",category:"Home"},
	//   {id: 3, name:"Todo",surname:"Todoovic",number:"065-65505544",category:"Work"},
	//   {id: 4, name:"Kek",surname:"Bur",number:"065-65505544",category:"Home"}]
	// )
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		let parsed = JSON.parse(localStorage.getItem("contacts"));
		setContacts(parsed);
	}, []);

	return (
		<div className="App" style={{ marginTop: "50px" }}>
			<Phonebook data={contacts} update={setContacts}></Phonebook>
			<AddForm setContacts={setContacts}></AddForm>
		</div>
	);
}

export default App;
