const db = require('./db');

const getparticipants = "SELECT * FROM participants ;";
const getnumberofparticipant = "SELECT MAX(id) AS id FROM participants ;"
const addparticipant = "INSERT INTO participants ( nom , prenom , email ) VALUES ( ? , ? , ? ) ;";
//const checkuser = "SELECT username, passwrd FROM logins";

function getParticipants() {
  return db.sqlQuery(getparticipants);
}

function getNumberOfParticipant() {
  return db.sqlQuery(getnumberofparticipant);
}

function addParticipant(nom, prenom, email) {
  return db.sqlQuery(addparticipant, [nom, prenom, email]);
}

/*function checkUser(user, pass) {
  let [username, passwrd] = db.sqlQuery(checkuser);
  if (user == username && pass == passwrd) {
    return 1;
  } else {
    return 0;
  }
}*/

exports.getParticipants = getParticipants;
exports.getNumberOfParticipant = getNumberOfParticipant;
exports.addParticipant = addParticipant;
//exports.checkUser = checkUser;