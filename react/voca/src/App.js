import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Hello age={10}/>
      <Hello age={20}/>
      <Hello age={30}/>
      <div class Name={styles.box}>App</div>
    </div>
  );
}

export default App;
