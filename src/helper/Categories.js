import { deleteDoc, doc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

export const addCategory = async (cid,name,imgUrl,desc,active) => {
    const response = await setDoc(doc(db,'categories',cid),{cid,name,imgUrl,desc,active});
    return response;
}

export const updateCategory = async (cid,name,imgUrl,desc,active) => {
    const response = await updateDoc(doc(db,'categories',cid),{cid,name,imgUrl,desc,active});
    return response;
}

export const deleteCategory = async (cid) => {
    const response = await deleteDoc(doc(db,'categories',cid));
    return response;
}

export const fetchCategories = async () => {
    const response = await getDocs(collection(db,'categories'));
    return response;
}