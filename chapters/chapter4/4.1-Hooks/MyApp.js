import React, { useState, useEffect } from "react";

function MyApp() {
  const [language, setLanguage] = useState("Java");

  // useEffect is simillar to componentdidmount
  useEffect(() => {
    setLanguage("JavaScript");
  }, []);

  return (
    <div>
      <h1> This is useEffect Hook </h1>
      <h3> The Declared language is {language}</h3>
    </div>
  );
}

export default MyApp;
