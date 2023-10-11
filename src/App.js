import React from "react";
import './App.css';
import ReactPlayer from "react-player";

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};


function App() {
  return (
    <div className="App">
      <MyVideo />
    </div>
  );
}

export default App;
