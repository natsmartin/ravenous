import './App.css';
import Header from '././components/Header.jsx';
import Search from './components/Search.jsx';
import BusinessList from '././components/BusinessList.jsx';
// import businesses from './business.json';

function App() {

  return (
    <div className="app">
      <Header />
      <Search />
      <BusinessList />
    </div>
  );
}

export default App;
