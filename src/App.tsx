import { Stage, Sprite, Text, Container } from "@pixi/react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Stage options={{ background: 0xffffff }}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={400}
        y={270}
        anchor={{ x: 0.5, y:0.5 }}
      >
        <Container x={400} y={330}>

        </Container>
      </Sprite>
    </Stage>
  );
}

export default App;
