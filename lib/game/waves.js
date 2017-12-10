import { TieFighter, DeathStar } from '../objects/enemy';

export function waveOne(game) {
  setTimeout(() => {
    game.audio['imperial'].play();
    game.audio['imperial'].loop = true;
  },400);
  let time1 = setTimeout(() => {
    let tie1 = new TieFighter(10, 5, game, 'ease');
    let tie2 = new TieFighter(10, 5, game, 'ease');
    let tie3 = new TieFighter(10, 5, game, 'ease');

    tie1.addShip(window.innerWidth * .22, -100);
    tie1.movedown(110);
    game.audio[`tie3`].play();
    let time8 = setTimeout(() => {
      tie2.addShip(window.innerWidth * .44, -100);
      tie2.movedown(110);
    }, 300);
    game.timeouts.push(time8);
    let time9 = setTimeout(() => {
      tie3.addShip(window.innerWidth * .66, -100);
      tie3.movedown(110);
      game.progress = true;
    }, 600);
    game.timeouts.push(time9);
  }, 2500);
  game.timeouts.push(time1);
}

export function waveTwo(game) {
  let time2 = setTimeout(() => {
    circleFormation(game);
    game.progress = true;
  }, 2500);
  game.timeouts.push(time2);
}

export function waveThree(game) {
  let time3 = setTimeout(() => {
    let tie1 = new TieFighter(10, 5, game, 'ease', true);
    let tie2 = new TieFighter(10, 5, game, 'ease', true);
    let tie3 = new TieFighter(10, 5, game, 'ease', true);

    tie1.addShip(window.innerWidth * .15, -100);
    tie2.addShip(window.innerWidth * .75, -100);
    tie3.addShip(window.innerWidth * .45, -100);
    tie1.movedown(130);
    tie2.movedown(130);
    tie3.movedown(130);
    game.progress = true;
  }, 2500);
  game.timeouts.push(time3);
}

export function waveFour(game) {
  let time4 = setTimeout(() => {
    crazyEight(game);
    game.progress = true;
  }, 2500);
  game.timeouts.push(time4);
}

export function Boss(game) {
  let time5 = setTimeout(() => {
    game.audio['imperial'].play();
    let time6 = setTimeout(() => {
      game.audio['imperial'].play();
      let deathstar = new DeathStar(10, 5, game, 'ease');
      deathstar.addShip(window.innerWidth * .43, -300);
      deathstar.movedown(90);
      game.progress = true;
    }, 2500);
    game.timeouts.push(time6);
  }, 1000);
  game.timeouts.push(time5);
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

  game.audio[`tie3`].play();
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

  game.audio[`tie3`].play();
};
