import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  setTimeout(() => {
    let tie1 = new TieFighter(0, 0, game, 'ease');
    let tie2 = new TieFighter(0, 0, game, 'ease');
    let tie3 = new TieFighter(0, 0, game, 'ease');
    tie1.addShip(300, -100);
    tie2.addShip(700, -100);
    tie3.addShip(1100, -100);
  }, 2000);
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
