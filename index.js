console.log('Person 1 : Shows ticket ');
console.log('Person 2 : Shows ticket ');

const preMovie = async ()=> {
  const promiseWife = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve('ticket'),3000);
  });

  const getPopCorn = new Promise((resolve, reject) => resolve('popcorn'));

  const addButter = new Promise((resolve, reject) => resolve('butter'))

  const getColdDrinks = new Promise((resolve, reject) => resolve('coldrink'));

  const getCandy = new Promise((resolve, reject) => resolve('candy'));

 let ticket = await promiseWife;

 let [popcorn, butter,coldrink, candy] = await Promise.all([ getPopCorn, addButter,  getCandy,getColdDrinks]);

 console.log(`${popcorn}, ${butter}, ${coldrink}, ${candy}`);


 return ticket;
}

preMovie().then((m) => console.log(`Person 3: show ${m}`));

console.log('Person 4 : Shows ticket ');
console.log('Person 5 : Shows ticket ');

