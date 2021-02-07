import './App.css';
import Timeline from './Components/Timeline';
import {useEffect} from 'react'
import TimelineHeader from './Components/TimelineHeader';
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    document.title = "Portfolio Darya van Tienhoven"
  })

  return (
    <div className="App">
      <TimelineHeader/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
