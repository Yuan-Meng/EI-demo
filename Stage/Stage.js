/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.on = 1;
    this.vars.Count = 4;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.vars.on == 0) {
        this.effects.brightness = 0;
      } else {
        this.effects.brightness = 15;
      }
      yield;
    }
  }
}
