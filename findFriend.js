// EXAMPLE DATA BELOW
const contacts = [{
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = (data, name, par) => {
  let result = {};
  const newData = data.filter(f => f.name === name);
  if (newData.length < 1) return result = "Not found";
  // console.log(newData);
  const person = newData[0];
  // console.log(person);

  const friends = person['friends'];

  // console.log(friends);
  const friend = friends[0];
  // console.log(friend);
  const friendData = data.filter(f => f.name === friend);
  // console.log(friendData);

  result['name'] = friend;
  const frd = friendData[0];
  // console.log(frd);
  // eslint-disable-next-line no-prototype-builtins
  if (frd.hasOwnProperty(par)) {
    result[par] = frd[par];
    return result;
  } else result = "Not found";

  return result;
};
console.log(findFriend(contacts, "Abbott", "phone"), {
  name: "Costello",
  phone: "767 676 7676"
});
console.log(findFriend(contacts, "Buster", "email"), {
  name: "Hardy",
  email: "hardy@hardyharhar.com"
});
console.log(findFriend(contacts, "Bob", "phone"), "Not found");
console.log(findFriend(contacts, "Costello", "birthday"), "Not found");

// (but if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information);;