const fs = require('fs');

const nomeDoArquivo = 'nomes.txt';

fs.readFile(nomeDoArquivo, (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});