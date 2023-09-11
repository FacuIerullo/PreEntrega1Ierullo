import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import data from "./seedData.json"

const productosCollection = collection(db, "productos")

data.forEach((producto)=>{
    addDoc(productosCollection, producto)
    .then((resultado)=>{
        console.log(resultado)
        return console.log("producto agregado")
    })
    .catch ((error) => {
        console.log(error)
        return console.log("todo mal")
    })
})

