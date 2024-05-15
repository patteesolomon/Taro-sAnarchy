import Phaser from "phaser";
// Create a new Phaser game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { y: 500 }, // Set gravity value
        debug: false // Set to true to enable physics debugging
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Initialize the Phaser game
const game = new Phaser.Game(config);

let player;

function preload() {
    // Load assets
    this.load.image('background', 'mistIntro.png');
    this.load.image('ground', 'path_to_ground_image.png');
    this.load.spritesheet('player', 'Taro.png', { frameWidth: 32, frameHeight: 48 });
}

function create() {
  // Create platforms
    const platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  // Create player
    player = this.physics.add.sprite(100, 450, 'player');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

  // Create player animations
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'player', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

  // Add collisions
    this.physics.add.collider(player, platforms);

    // Set up cursor keys
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  // Player movement controls
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    // Player jump control
    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-400);
    }
}