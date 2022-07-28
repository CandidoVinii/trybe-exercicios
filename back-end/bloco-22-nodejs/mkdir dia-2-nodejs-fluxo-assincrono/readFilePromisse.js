const fs = require('fs').promises;

const nomeDoArquivo = 'nomes.txt';

//  > A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

fs.writeFile('./eyes.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });

// fs.writeFile(nomeDoArquivo, "Pietro")
//   .then(() => {
//     console.log("Arquivo escrito com sucesso");
//   })
//   .catch((error) => {
//     console.log(`O erro final foi: ${error.message}`);
//     process.exit(1);
//   });

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Nomes: ${data}`);
  })
  .catch((error) => {
    console.log(`o erro foi ${error}`);
    process.exit(1);
  });