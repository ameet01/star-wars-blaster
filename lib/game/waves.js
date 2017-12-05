import { TieFighter } from '../objects/enemy';

export function waveOne(game) {
  let tie1 = new TieFighter(1, 1, game);
  tie1.addShip(400, 50);
}
