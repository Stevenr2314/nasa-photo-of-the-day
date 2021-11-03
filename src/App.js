import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PicOfDay from "./Components/PicOfDay/PicOfDay";

function App() {
  const [pod, setPod] = useState({})

  useEffect( () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mwG3rW1ji3NvaOBSUtvkvZqrUKsS5moq1Azj90JI')
    .then(resp => {
      console.log(resp)
      setPod(resp.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <PicOfDay  imgURL={pod.url} title={pod.title} name={pod.copyright} desc={pod.explanation}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
