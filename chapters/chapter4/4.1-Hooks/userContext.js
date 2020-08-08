import React from "react";



export const userContext = React.createContext();



/* ------------------------APP Component ------------------*/

import userContext from "./userContext"

const App = () =>  {

  return(
  <div>
    <userContext.Provider  value={"App Component"} >
          <ComponentOne />
    </userContext.Provider>
  </div>
  
  )

}



/* ------------------------ComponentOne Component ------------------*/



const ComponentOne = () =>  {

  return(
  
    <>
          <ComponentTwo />
    </> 
  
  )

}


/* ------------------------ComponentTwo Component ------------------*/

import userContext from "./userContext"

const ComponentTwo = () =>  {

  return(
  
    <>
       <userContext.Consumer>
             {
               (valueFromAppComp) => {
               return <h4> Hello {valueFromAppComp} I'm ComponentTwo </h4> 
               }
             }
       </userContext.Consumer>
    </> 
  
  )

}
