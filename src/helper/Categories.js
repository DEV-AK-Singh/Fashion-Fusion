import { deleteDoc, doc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

export const addCategory = async (name,imgUrl,desc,active) => {
    const response = await setDoc(doc(db,'categories',name),{name,imgUrl,desc,active});
    return response;
}

export const updateCategory = async (name,imgUrl,desc,active) => {
    const response = await updateDoc(doc(db,'categories',name),{name,imgUrl,desc,active});
    return response;
}

export const deleteCategory = async (name) => {
    const response = await deleteDoc(doc(db,'categories',name));
    return response;
}

export const fetchCategories = async () => {
    const response = await getDocs(collection(db,'categories'));
    return response;
}