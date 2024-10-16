
//form, table, and push data

//import table and form file 
import Table from "./Table"
import Form from "./Form"
import { useState } from "react"

//create APP Function 
function App(){

  const [favLinks, setFavLinks] = useState ([])


  let handleNewSubmission = (data) =>{

      setFavLinks([...favLinks, data])

  }

  return(

    <div>
    <h1 className="testClass">Submit your Fav Link</h1>
      <Form onNewSubmit = {handleNewSubmission}/>
      <Table link={favLinks}/>
    
    </div>
  )
}

export default App