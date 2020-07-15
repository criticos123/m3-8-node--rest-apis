const { words } = require("../data/words");
// write your handlers here...

const getWord = (id) => {
  return words.find((word) => word.id == id);
};
hangId = (req, res) => {
  let id = req.params.id;
  const word = getWord(id).word;
  res.status(200).json(word);
};

hangWord = (req, res) => {
  const word = words[Math.floor(Math.random() * words.length)];
  res.status(200).json("id:" + word.id + " lettercount:" + word.letterCount);
};
hangGuess = (req, res) => {
  let id = req.params.id;
  const word = getWord(id).word;
  let wordArray = [...word];
  const mapping = wordArray.map((letter) => {
    return letter === req.params.letter;
  });
  res.status(200).json(mapping);
};

module.exports = { hangId, hangWord, hangGuess };
