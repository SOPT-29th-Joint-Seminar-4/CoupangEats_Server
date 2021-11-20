const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-e30ad-firebase-adminsdk-i7uks-f9397cc200.json");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};