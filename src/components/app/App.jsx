import './App.scss';
import Counter from '../counter/Counter';

export default function App() {
  
  console.log("App rendered");
  
  return (
    <div className="app">
      <Counter/>
    </div>
  );
}
