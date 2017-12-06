import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  setTimeout(() => {
    let tie1 = new TieFighter(10, 5, game, 'ease');
    let tie2 = new TieFighter(10, 5, game, 'ease');
    let tie3 = new TieFighter(10, 5, game, 'ease');
    tie1.addShip(window.innerWidth * .22, -100);
    setTimeout(() => tie2.addShip(window.innerWidth * .44, -100), 300);
    setTimeout(() => tie3.addShip(window.innerWidth * .66, -100), 600);
  }, 2000);

  setTimeout(() => {
    let tie1 = new TieFighter(0, 0, game, 'ease');
    let tie2 = new TieFighter(0, 0, game, 'ease');
    let tie3 = new TieFighter(0, 0, game, 'ease');
    let tie4 = new TieFighter(0, 0, game, 'ease');
    let tie5 = new TieFighter(0, 0, game, 'ease');
    tie1.addShip(window.innerWidth * .06, -100);
    tie2.addShip(window.innerWidth * .26, -100);
    tie3.addShip(window.innerWidth * .46, -100);
    tie4.addShip(window.innerWidth * .66, -100);
    tie5.addShip(window.innerWidth * .86, -100);
  }, 9000);

  setTimeout(() => {
    let tie1 = new TieFighter(0, 0, game, 'ease');
    let tie2 = new TieFighter(0, 0, game, 'ease');
    let tie3 = new TieFighter(0, 0, game, 'ease');
    tie1.addShip(window.innerWidth * .22, -100);
    tie2.addShip(window.innerWidth * .44, -100);
    tie3.addShip(window.innerWidth * .66, -100);
  }, 16000);

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
