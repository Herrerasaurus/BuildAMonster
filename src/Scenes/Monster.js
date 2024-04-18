class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        //legs 2+
        this.left_legX = this.bodyX - 60;
        this.left_legY = this.bodyY + 110;
        this.right_legX = this.bodyX + 60;
        this.right_legY = this.bodyY + 110;

        //arms 2+
        this.left_armX = this.bodyX - 70;
        this.left_armY = this.bodyY + 60;
        this.right_armX = this.bodyX + 70;
        this.right_armY = this.bodyY + 60;

        //eyes 1+
        this.eye_oneX = this.bodyX - 0;
        this.eye_oneY = this.bodyY - 50;

        //mouth 1+
        this.mouth_oneX = this.bodyX - 0;
        this.mouth_oneY = this.bodyY + 50;

        //nose and detail 2+
        this.left_hornX = this.bodyX - 40;
        this.left_hornY = this.bodyY - 100;
        this.right_hornX = this.bodyX + 40;
        this.right_hornY = this.bodyY - 100;
        
        this.keyS;
        this.keyD;
        this.keyA;
        this.keyF;

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

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.right_leg = this.add.sprite(this.right_legX, this.right_legY, "monsterParts", "leg_whiteE.png");
        my.sprite.left_leg = this.add.sprite(this.left_legX, this.left_legY, "monsterParts", "leg_whiteE.png");
        my.sprite.left_leg.flipX = true;
        my.sprite.right_arm = this.add.sprite(this.right_armX, this.right_armY, "monsterParts", "arm_whiteB.png");
        my.sprite.left_arm = this.add.sprite(this.left_armX, this.left_armY, "monsterParts", "arm_whiteB.png");
        my.sprite.left_arm.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueE.png");

        my.sprite.eye_one = this.add.sprite(this.eye_oneX, this.eye_oneY, "monsterParts", "eye_blue.png");
        my.sprite.mouth_one = this.add.sprite(this.mouth_oneX, this.mouth_oneY, "monsterParts", "mouthB.png");
        //fangs
        my.sprite.mouth_two = this.add.sprite(this.mouth_oneX, this.mouth_oneY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouth_two.visible = false;

        my.sprite.right_horn = this.add.sprite(this.right_hornX, this.right_hornY, "monsterParts", "detail_white_horn_small.png");
        my.sprite.left_horn = this.add.sprite(this.left_hornX, this.left_hornY, "monsterParts", "detail_white_horn_large.png");
        my.sprite.left_horn.flipX = true;

        //key variables
        //my.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        //my.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        my.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //Event input: dimple smile
        this.input.keyboard.on('keydown-S', (event)=> {
            my.sprite.mouth_two.visible = false;
            my.sprite.mouth_one.visible = true;
        });
        //Event input: regular smile
        this.input.keyboard.on('keydown-F', (event)=> {
            my.sprite.mouth_two.visible = true;
            my.sprite.mouth_one.visible = false;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(my.keyA.isDown){
            my.sprite.right_arm.x -= 1;
            my.sprite.right_leg.x -= 1;
            my.sprite.left_arm.x -= 1;
            my.sprite.left_leg.x -= 1;
            my.sprite.right_horn.x -= 1;
            my.sprite.left_horn.x -= 1;
            my.sprite.body.x -= 1;
            my.sprite.eye_one.x -= 1;
            my.sprite.mouth_one.x -= 1;
            my.sprite.mouth_two.x -= 1;

            
            
        }else if(my.keyD.isDown){
            my.sprite.right_arm.x += 1;
            my.sprite.right_leg.x += 1;
            my.sprite.left_arm.x += 1;
            my.sprite.left_leg.x += 1;
            my.sprite.right_horn.x += 1;
            my.sprite.left_horn.x += 1;
            my.sprite.body.x += 1;
            my.sprite.eye_one.x += 1;
            my.sprite.mouth_one.x += 1;
            my.sprite.mouth_two.x += 1;

        }
       
    }

}