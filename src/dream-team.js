module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length === 0) {
    return false;
  }
let arr = members.filter(el => typeof el === 'string');

if(!arr || arr.length === 0) {
  return false;
}

return arr.map(el => el.trim()).map(el => el.toUpperCase()).sort().map(el => el[0]).join('');

};