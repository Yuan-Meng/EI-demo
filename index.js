import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import A from "./A/A.js";
import B from "./B/B.js";
import C from "./C/C.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  A: new A({
    x: -130,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 3
  }),
  B: new B({
    x: -5,
    y: 95,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 2
  }),
  C: new C({
    x: 120,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
