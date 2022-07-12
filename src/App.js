import Unity_Technologies_logo from './Unity_Technologies_logo.svg';
import './App.css';
import './Data.js';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
        <img src={Unity_Technologies_logo} className="App-logo" alt="Unity Logo" />
        <h1>Recipe Book</h1>
        <Box
      sx={{
        position: absolute,
        width: 1080,
        height: 720,
        left: 426,
        top: 192,
        
        backgroundColor: '#2D2D2D',
        border-radius: '45';
      }}
    />
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
