import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  setTimeout(() => {
    let tie1 = new TieFighter(10, 5, game, 'ease');
    let tie2 = new TieFighter(10, 5, game, 'ease', true);
    let tie3 = new TieFighter(10, 5, game, 'ease');

    tie1.addShip(window.innerWidth * .22, -100);
    tie1.movedown(110);
    game.audio[`tie3`].play();
    setTimeout(() => {
      tie2.addShip(window.innerWidth * .44, -100);
      tie2.movedown(110);
    }, 300);
    setTimeout(() => {
      tie3.addShip(window.innerWidth * .66, -100);
      tie3.movedown(110);
    }, 600);
  }, 2000);

  setTimeout(() => {
    circleFormation(game);
  }, 9000);

  setTimeout(() => {
    crazyEight(game);
  }, 19000);

}

export function waveTwo(game) {
  let tie1 = new TieFighter(0, 0, game, 'straight');
  let tie2 = new TieFighter(0, 0, game, 'straight');
  let tie3 = new TieFighter(0, 0, game, 'straight');
  tie1.addShip(300, 50);
  tie2.addShip(700, 50);
  tie3.addShip(1100, 50);
}

export function waveThree(game) {

}

export function Boss(game) {

}

const circleFormation = (game) => {
  let tie1 = new TieFighter(0, 0, game, 'ease');
  let tie2 = new TieFighter(0, 0, game, 'ease');
  let tie3 = new TieFighter(0, 0, game, 'ease');
  let tie4 = new TieFighter(0, 0, game, 'ease');
  let tie5 = new TieFighter(0, 0, game, 'ease');
  let tie6 = new TieFighter(0, 0, game, 'ease');
  let tie7 = new TieFighter(0, 0, game, 'ease');
  let tie8 = new TieFighter(0, 0, game, 'ease');

  tie1.addShip(window.innerWidth * .44, -100);
  tie2.addShip(window.innerWidth * .50, -100);
  tie3.addShip(window.innerWidth * .56, -100);
  tie4.addShip(window.innerWidth * .50, -100);
  tie5.addShip(window.innerWidth * .44, -100);
  tie6.addShip(window.innerWidth * .38, -100);
  tie7.addShip(window.innerWidth * .32, -100);
  tie8.addShip(window.innerWidth * .38, -100);

  tie1.movedown(50);
  tie2.movedown(120);
  tie3.movedown(190);
  tie4.movedown(260);
  tie5.movedown(330);
  tie6.movedown(260);
  tie7.movedown(190);
  tie8.movedown(120);
};

const crazyEight = (game) => {
  let tie1 = new TieFighter(0, 0, game, 'ease');
  let tie2 = new TieFighter(0, 0, game, 'ease');
  let tie3 = new TieFighter(0, 0, game, 'ease');
  let tie4 = new TieFighter(0, 0, game, 'ease');
  let tie5 = new TieFighter(0, 0, game, 'ease');
  let tie6 = new TieFighter(0, 0, game, 'ease');
  let tie7 = new TieFighter(0, 0, game, 'ease');
  let tie8 = new TieFighter(0, 0, game, 'ease');

  tie1.addShip(window.innerWidth * .64, -100);
  tie2.addShip(window.innerWidth * .70, -100);
  tie3.addShip(window.innerWidth * .76, -100);
  tie4.addShip(window.innerWidth * .70, -100);
  tie5.addShip(window.innerWidth * .64, -100);
  tie6.addShip(window.innerWidth * .58, -100);
  tie7.addShip(window.innerWidth * .52, -100);
  tie8.addShip(window.innerWidth * .58, -100);

  tie1.movedown(50);
  tie2.movedown(120);
  tie3.movedown(190);
  tie4.movedown(260);
  tie5.movedown(330);
  tie6.movedown(260);
  tie7.movedown(190);
  tie8.movedown(120);

  let t1 = new TieFighter(0, 0, game, 'ease');
  let t2 = new TieFighter(0, 0, game, 'ease');
  let t3 = new TieFighter(0, 0, game, 'ease');
  let t4 = new TieFighter(0, 0, game, 'ease');
  let t5 = new TieFighter(0, 0, game, 'ease');
  let t6 = new TieFighter(0, 0, game, 'ease');
  let t7 = new TieFighter(0, 0, game, 'ease');
  let t8 = new TieFighter(0, 0, game, 'ease');

  t1.addShip(window.innerWidth * .24, -100);
  t2.addShip(window.innerWidth * .30, -100);
  t3.addShip(window.innerWidth * .36, -100);
  t4.addShip(window.innerWidth * .30, -100);
  t5.addShip(window.innerWidth * .24, -100);
  t6.addShip(window.innerWidth * .18, -100);
  t7.addShip(window.innerWidth * .12, -100);
  t8.addShip(window.innerWidth * .18, -100);

  t1.movedown(50);
  t2.movedown(120);
  t3.movedown(190);
  t4.movedown(260);
  t5.movedown(330);
  t6.movedown(260);
  t7.movedown(190);
  t8.movedown(120);

};
