import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  setTimeout(() => {
    let tie1 = new TieFighter(0, 0, game);
    let tie2 = new TieFighter(0, 0, game);
    let tie3 = new TieFighter(0, 0, game);
    tie1.addShip(300, 50);
    tie2.addShip(700, 50);
    tie3.addShip(1100, 50);
  }, 2000);
}
