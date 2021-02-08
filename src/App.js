import './App.css';
import Timeline from './Components/Timeline';
import {useEffect} from 'react'
import TimelineHeader from './Components/TimelineHeader';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Introduction from './Components/Introduction';

const App = () => {

  useEffect(() => {
    document.title = "Portfolio Darya van Tienhoven"
  })

  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <TimelineHeader/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
