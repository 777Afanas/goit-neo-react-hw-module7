import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";

const App = () => {
  
  return (
    <div className={style.app}>
      <h1>Phonebook</h1>
      <div className={style.sidebar}>
        <ContactForm />
        <SearchBox />
      </div> 
      <ContactList />
    </div>
  );
};

export default App;
