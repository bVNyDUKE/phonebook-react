import ContactList from './components/ContactList'

function App() {
  const contacts = [
    { //default data kad nemamo nista u storage
      first_name: 'Herp',
      last_name: 'Derp',
      number: '065-65505544',
      category: 'Work',
    },
    {
      first_name: 'Smor',
      last_name: 'Duur',
      number: '065-65505544',
      category: 'Home',
    },
    {
      first_name: 'Todo',
      last_name: 'Todoovic',
      number: '065-65505544',
      category: 'Work',
    },
    {
      first_name: 'Kek',
      last_name: 'Bur',
      number: '065-65505544',
      category: 'Home',
    },
  ]


  return (
    <div className="App" style={{marginTop: "50px"}}>
      <ContactList data={contacts}></ContactList>
    </div>
  );
}

export default App;
