import './App.css';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import MyProjects from './components/MyProjects';


function App() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
