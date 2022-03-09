const newPerson = (nomeCompleto) => {
    const generatEmail = nomeCompleto.toLowerCase().split(' ').join('_');
    let email = {nomeCompleto,
    email: `${generatEmail}@trybe.com`
    }

     return email;
}


const newEmployees = (callbakc) => {
    const employees = {
      id1: newPerson('Pedro Guerra'),
      id2: newPerson('Luiza Drumond'),
      id3: newPerson('Carla Paiva'), 
    }
   return employees;
};

console.log(newEmployees(newPerson));


  