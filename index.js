console.log('Person 1 : Shows ticket ');
console.log('Person 2 : Shows ticket ');

const preMovie = async ()=> {
  const promiseWife = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve('ticket'),3000);
  });

  const getPopCorn = new Promise((resolve, reject) => resolve('popcorn'));

  const addButter = new Promise((resolve, reject) => resolve('butter'))

  const getColdDrinks = new Promise((resolve, reject) => resolve('coldrink'));

 let ticket = await promiseWife;

 console.log(`Wife: i have ${ticket}`);
 console.log('Husband: We should go');
 console.log('Wife: No i am hungry');

 let popcorn = await getPopCorn;

 console.log(`husband: i got some ${popcorn}`);
 console.log('Husband: We should go');
 console.log('Wife: No i need some butter');

 let butter = await addButter;

 console.log(`Husband: i got some ${butter}`);
 console.log('Husband: Anything else');
 console.log('Wife: Yes, get me a cold drink');

 let coldrink = await getColdDrinks;

 console.log(`Husband: i got some ${coldrink}`);
 console.log('Wife: We shold go now');
 console.log('Husband: Anything else');
 console.log('Wife: Lets go we are getting late');
 console.log('Husband: Thank you, lets goo!!!!!!!!!!');

 return ticket;
}

preMovie().then((m) => console.log(`Person 3: show ${m}`));

console.log('Person 4 : Shows ticket ');
console.log('Person 5 : Shows ticket ');

