const vqv = (string, number) => {
  if (!string || !number) {
    return undefined;
  }
  const frase = `Oi, meu nome é ${string}!
Tenho ${number} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
return frase;
};

module.exports = vqv;
