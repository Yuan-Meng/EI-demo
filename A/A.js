/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class A extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("yellow", "./A/costumes/yellow.png", { x: 206, y: 358 }),
      new Costume("yellowOn", "./A/costumes/yellowOn.png", { x: 324, y: 349 })
    ];

    this.sounds = [
      new Sound("Start.mp2", "./A/sounds/Start.mp2.wav"),
      new Sound("Stop.mp3", "./A/sounds/Stop.mp3.wav")
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

    this.vars.onA = 0;
    this.vars.onC = 1;
  }

  *whenKeySpacePressed() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "yellow";
    this.goto(-130, -80);
    this.vars.onA = 0;
    this.moveAhead();
    this.size = 30;
    this.effects.brightness = 0;
    this.stage.costume = "backdrop1";
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Start.mp2");
    yield* this.wait(0.1);
    yield* this.startSound("Stop.mp3");
    if (this.vars.onA == 0) {
      this.goto(-130, -65);
      this.costume = "yellowOn";
      this.size = 40;
      this.effects.brightness = 30;
      this.vars.onA = 1;
    } else {
      this.goto(-130, -80);
      this.costume = "yellow";
      this.size = 30;
      this.effects.brightness = 0;
      this.vars.onA = 0;
    }
  }
}
