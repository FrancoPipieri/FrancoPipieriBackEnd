import admin from "firebase-admin"
import mongoose from "mongoose";
import fs from "fs"
import { createRequire} from "module"

const iniciarServidorFirebase = async () => {
    // const require = createRequire(import.meta.url)
    // const FBServiceAccount = require('./no-va/mibase-f0167-firebase-adminsdk-i18iw-364608cba0.json');
    const FBServiceAccount = JSON.parse(fs.readFileSync('./no-va/mibase-f0167-firebase-adminsdk-i18iw-364608cba0.json', 'utf-8'))
    // try {
      admin.initializeApp({
        credential: admin.credential.cert(FBServiceAccount),
        databaseURL:"https://mibase-f0167.firebaseio.com"
      })
      console.log('Firebase se encuentra conectado')
  //   } catch(error) {
  //     console.log(error)
  //   }
  }
  
  const connectDB = async () => {
    const url = 'mongodb://127.0.0.1:27017/mibase'
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export {iniciarServidorFirebase, connectDB}