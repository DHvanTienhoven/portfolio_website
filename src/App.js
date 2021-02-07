import './App.css';
import Timeline from './Components/Timeline';
import {useEffect} from 'react'
import TimelineHeader from './Components/TimelineHeader';

function App() {

  useEffect(() => {
    document.title = "Portfolio Darya van Tienhoven"
  })

  return (
    <div className="App">
      <TimelineHeader/>
      <Timeline/>
    </div>
  );
}

export default App;
