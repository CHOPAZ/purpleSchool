/* Условия в функциях*/

function canAccessWebSite(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(canAccessWebSite(18));

function canAccessWebSite2(age) {
  if (age < 18) {
    return false;
  }
    return true;
}

console.log(canAccessWebSite2(16));

const canAccessWebSite3 = age => age < 18; // вернет true or false 

const canAccessWebSite4 = age => age < 18 ? 'Da' : 'Net'; // вернет да или нет