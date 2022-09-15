const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (status) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();
  let angry = 0;
  let notAngry = 0;
  for (var key in ixx) {
    var movie = ixx[key];
    if (movie.hasil == "marah") {
      angry += 1;
    } else {
      notAngry += 1;
    }
  }
  for (var key in vgc) {
    var movie = vgc[key];
    if (movie.hasil == "marah") {
      angry += 1;
    } else {
      notAngry += 1;
    }
  }
  if (status == "marah") {
    return angry;
  } else {
    return notAngry;
  }
};

module.exports = {
  promiseOutput,
};
