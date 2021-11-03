import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PicOfDay from "./Components/PicOfDay/PicOfDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

let today = new Date().toISOString().slice(0, 10)

function App() {
  const [pod, setPod] = useState({})
  const [date, setDate]=useState(today)

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=mwG3rW1ji3NvaOBSUtvkvZqrUKsS5moq1Azj90JI&date=${date}`)
    .then(resp => {
      console.log(resp)
      setPod(resp.data)
    })
    .catch(err => console.log(err))
  }, [date])

  const randomPic = () => {

  }

  return (
    <div className="App">
      <div className='App-header'>
        <FontAwesomeIcon icon={faRocket} className='App-logo'/>
      </div>
      <PicOfDay  imgURL={pod.url} title={pod.title} name={pod.copyright} desc={pod.explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
