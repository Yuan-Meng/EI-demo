/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class C extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("red2", "./C/costumes/red2.png", { x: 206, y: 358 }),
      new Costume("redOn", "./C/costumes/redOn.png", { x: 326, y: 348 })
    ];

    this.sounds = [
      new Sound("Start.mp2", "./C/sounds/Start.mp2.wav"),
      new Sound("Stop.mp3", "./C/sounds/Stop.mp3.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.onC3 = 0;
    this.vars.onB2 = 1;
  }

  *whenKeySpacePressed() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "red2";
    this.goto(120, -80);
    this.vars.onC3 = 0;
    this.moveAhead();
    this.size = 30;
    this.effects.brightness = 0;
    this.stage.costume = "backdrop1";
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Start.mp2");
    yield* this.wait(0.1);
    yield* this.startSound("Stop.mp3");
    if (this.vars.onC3 == 0) {
      this.goto(120, -65);
      this.costume = "redOn";
      this.size = 40;
      this.effects.brightness = 30;
      this.vars.onC3 = 1;
    } else {
      this.goto(120, -80);
      this.costume = "red2";
      this.size = 30;
      this.effects.brightness = 0;
      this.vars.onC3 = 0;
    }
  }
}
