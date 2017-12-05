import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  let tie1 = new TieFighter(1, 1, game);
  let tie2 = new TieFighter(1, 1, game);
  let tie3 = new TieFighter(1, 1, game);
  tie1.addShip(300, 50);
  tie2.addShip(700, 50);
  tie3.addShip(1100, 50);
}
