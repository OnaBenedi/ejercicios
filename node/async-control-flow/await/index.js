const players = ["Tina", "Jorge", "Julien"];

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

function getResults() {
  let luckyDrawResults;
  players.forEach(async (player) => {
    try {
      luckyDrawResults = await luckyDraw(player);
      console.log(luckyDrawResults);
    } catch (error) {
      console.error(error);
    }

  });
}

getResults();
