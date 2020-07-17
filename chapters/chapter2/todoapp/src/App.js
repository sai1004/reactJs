import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";

function App() {
  const firstName = "john";
  const lastName = "wick";

  return (
    <div className="App">
      <Header />
      <MainContent />
      <h1> Hello {firstName + " " + lastName}</h1>
      <h1> Hello {`${firstName} ${lastName}`}</h1>
      <TodoItem />

      {/* Way One 
      
      <ContactCard name="Mr John Wick" email="john@xyz.com" />
      <ContactCard name="Kurt weller" email="kurt@xyz.com" />
      <ContactCard name="Jane Doe" email="jane@xyz.com" />
      <ContactCard name="Zapata" email="zapata@xyz.com" />
      <ContactCard name="Reed" email="reed@xyz.com" /> */}

      {/* Another Way
      
      <ContactCard contactObj={{ name: "Mr John Wick", email: "john@xyz.com" }} />
      <ContactCard contactObj={{ name: "Kurt weller", email: "kurt@xyz.com" }} />
      <ContactCard contactObj={{ name: "Jane Doe", email: "jane@xyz.com" }} />
      <ContactCard contactObj={{ name: "Zapata", email: "zapata@xyz.com" }} />
      <ContactCard contactObj={{ name: "Reed", email: "reed@xyz.com" }} /> */}

      <Footer />
    </div>
  );
}

export default App;
