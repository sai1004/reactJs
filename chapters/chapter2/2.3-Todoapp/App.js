import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import jokesData from "./components/JokesData";

function App() {
  const firstName = "john";
  const lastName = "wick";

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const doubled = nums.map((num) => {
    return num * 2;
  });

  console.log(doubled);

  const jokeComponents = jokesData.map((joke, index) => {
    return <Joke key={index} question={joke.question} ans={joke.ans} />;
  });

  return (
    <div className="App">
      <Header />
      <MainContent />
      <h1> Hello {firstName + " " + lastName}</h1>
      <h1> Hello {`${firstName} ${lastName}`}</h1>
      <TodoItem />

      {/* Way One 
      
      <ContactCard name="Mr John Wick" email="john@xyz.com" />
     
      <ContactCard name="Reed" email="reed@xyz.com" /> */}

      {/* Another Way pssing all props with one obj(prop)
      
      <ContactCard contactObj={{ name: "Mr John Wick", email: "john@xyz.com" }} />
      
      <ContactCard contactObj={{ name: "Reed", email: "reed@xyz.com" }} /> */}

      {/* <Joke question="WHAT DO YOU DO?" ans="I’m unemployed at the moment" />
      <Joke
        question=" WHAT’S THE WEATHER LIKE?"
        ans="A little chilly – you might wanna bring a jacket."
      />
      <Joke
        question="WHAT DO YOU DO IN FREE TIME?"
        ans="I don’t have any free time!"
      />
      <Joke question="" ans="I don’t have any free time!" /> */}

      {jokeComponents}

      <Footer />
    </div>
  );
}

export default App;
