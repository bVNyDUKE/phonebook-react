import { useEffect, useState } from "react";
import Phonebook from "./components/Phonebook";
import AddForm from "./components/Forms/AddForm";
import { Route } from "react-router-dom";

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

	const workContacts = contacts.filter( x => x.category === "Work");
	const homeContacts = contacts.filter( x => x.category === 'Home');

	return (
		<div className="App" style={{ marginTop: "50px" }}>
			
			<Route
				exact
				path="/work"
				render={() => (
					<Phonebook data={workContacts} update={setContacts} />
				)}
			/>
			<Route
				exact
				path="/home"
				render={() => (
					<Phonebook data={homeContacts} update={setContacts} />
				)}
			/>
			<Route
				exact
				path="/"
				render={() => (
					<Phonebook data={contacts} update={setContacts} />
				)}
			/>
			<AddForm setContacts={setContacts}></AddForm>
		</div>
	);
}

export default App;
