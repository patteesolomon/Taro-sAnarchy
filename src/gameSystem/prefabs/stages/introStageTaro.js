import React from 'react';
import Phaser from 'phaser';

const update = {

};

const create = {

};

function preload() {
    //this.load.image("background00", "src/gameSystem/assets/background00.png");
    //this.load.image("tileSet00", "src/gameSystem/assets/tileSet00.png");
    //this.load.image("op_Mist", "src/gameSystem/assets/op_Mist.png");
    //this.load.spritesheet("TaroSheet", "src/gameSystem/assets/TaroSheet.png", 128, 128, 16);
}

const config = {
        type: Phaser.AUTO,
        parent: "phaser",
        width: document.body.clientWidth,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

const game = new Phaser.Game(config);
    
const introStage = () => {
    

    
    return (
        <div>introStage</div>
    )
}

export default introStage