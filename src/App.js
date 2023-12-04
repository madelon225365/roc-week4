import logo from './logo.svg';
import './App.scss';
import { PolylineOutlined } from '@ricons/material'
import { Icon } from '@ricons/utils'
import Card from './components/Card'
import Button from './components/Button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Card image="//via.placeholder.com/500x200" text>
      <Icon icon={PolylineOutlined} />
    </Card>
      </header> 
      <Button variant="warning" text="muus"></Button>
    </div>
  );
}

export default App;
