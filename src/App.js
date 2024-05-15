import logo from './Xlogo.png';
import Phaser from 'phaser';
import './App.css';

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: document.body.clientWidth,
  height: 640,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logo);
}
// leave room for the Anarchy Subtitle underneath the logo
function create() {
  const pressStart = this.add.text(640, -480, "Press Start", { fontFamily: 'Roboto', fontSize: 64, textDecoration: 'indented', color: '#4ef3af' });
  const subtitle = this.add.text(370, -480, "TARO'S ANARCHY Alphabuild", { fontFamily: 'Roboto', fontSize: 64, textDecoration: 'indented', color: '#4ef3af' });

  this.tweens.add({
      targets: subtitle,
      y: 250,
      duration: 2000,
      ease: "Power2"
    });
  this.tweens.add({
      targets: pressStart,
      y: 350,
      duration: 5000,
      ease: "Approximate"
  });
}

function App() {
  return (
    <div className="App">
      <>
        {game}
      </>
      </div>
  );
}

export default App;
