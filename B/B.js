/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("green2", "./B/costumes/green2.png", { x: 206, y: 358 }),
      new Costume("greenOn", "./B/costumes/greenOn.png", { x: 326, y: 348 })
    ];

    this.sounds = [
      new Sound("Start.mp2", "./B/sounds/Start.mp2.wav"),
      new Sound("Stop.mp3", "./B/sounds/Stop.mp3.wav")
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

    this.vars.onB = 0;
    this.vars.onC2 = 0;
  }

  *whenKeySpacePressed() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "green2";
    this.goto(-5, 95);
    this.vars.onB = 0;
    this.moveAhead();
    this.size = 30;
    this.effects.brightness = 0;
    this.stage.costume = "backdrop1";
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Start.mp2");
    yield* this.wait(0.1);
    yield* this.startSound("Stop.mp3");
    if (this.vars.onB == 0) {
      this.goto(-5, 110);
      this.costume = "greenOn";
      this.size = 40;
      this.effects.brightness = 30;
      this.vars.onB = 1;
    } else {
      this.goto(-5, 95);
      this.costume = "green2";
      this.size = 30;
      this.effects.brightness = 0;
      this.vars.onB = 0;
    }
  }
}
