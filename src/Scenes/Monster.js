class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        this.A_Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.D_Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX+80, this.bodyY+40, "monsterParts", "arm_blueB.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX-80, this.bodyY+40, "monsterParts", "arm_blueB.png");
        my.sprite.arm2.flipX=true;
        my.sprite.leg1 = this.add.sprite(this.bodyX+80, this.bodyY+120, "monsterParts", "leg_darkB.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX-80, this.bodyY+120, "monsterParts", "leg_darkB.png");
        my.sprite.leg2.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-30, "monsterParts", "eye_human.png");
        my.sprite.nose1 = this.add.sprite(this.bodyX+50, this.bodyY, "monsterParts", "nose_red.png");
        my.sprite.nose2 = this.add.sprite(this.bodyX-50, this.bodyY, "monsterParts", "nose_red.png");
        my.sprite.mouth1 = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "mouthA.png");
        my.sprite.mouth2 = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "mouthB.png");
        my.sprite.mouth3 = this.add.sprite(this.bodyX, this.bodyY+60, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouth1.visible = false;
        my.sprite.mouth2.visible = false;

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth1.visible = true;
            my.sprite.mouth2.visible = false;
            my.sprite.mouth3.visible = false;
        });
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth1.visible = false;
            my.sprite.mouth2.visible = true;
            my.sprite.mouth3.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.A_Key.isDown) {
            this.bodyX -= 2; // Move left
        }
        if (this.D_Key.isDown) {
            this.bodyX += 2; // Move right
        }
        my.sprite.body.setPosition(this.bodyX, this.bodyY);
        my.sprite.arm1.setPosition(this.bodyX+80, this.bodyY+40);
        my.sprite.arm2.setPosition(this.bodyX-80, this.bodyY+40);
        my.sprite.leg1.setPosition(this.bodyX+80, this.bodyY+120);
        my.sprite.leg2.setPosition(this.bodyX-80, this.bodyY+120);
        my.sprite.eye.setPosition(this.bodyX, this.bodyY-30);
        my.sprite.nose1.setPosition(this.bodyX+50, this.bodyY);
        my.sprite.nose2.setPosition(this.bodyX-50, this.bodyY);
        my.sprite.mouth1.setPosition(this.bodyX, this.bodyY+60);
        my.sprite.mouth2.setPosition(this.bodyX, this.bodyY+60);
        my.sprite.mouth3.setPosition(this.bodyX, this.bodyY+60);
    }

}