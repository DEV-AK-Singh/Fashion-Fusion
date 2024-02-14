import { deleteDoc, doc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

// name,category,description,price,discountedPrice,saleOFF,Images,Qty,brand,Tags,shippingInfo

export const addProduct = async (pid,name,category,description,price,discountedPrice,saleOFF,Images,Qty,brand,Tags,shippingInfo) => {
    const response = await setDoc(doc(db,'products',pid),{pid,name,category,description,price,discountedPrice,saleOFF,Images,Qty,brand,Tags,shippingInfo});
    return response;
}

export const updateProduct = async (pid,name,category,description,price,discountedPrice,saleOFF,Images,Qty,brand,Tags,shippingInfo) => {
    const response = await updateDoc(doc(db,'products',pid),{pid,name,category,description,price,discountedPrice,saleOFF,Images,Qty,brand,Tags,shippingInfo});
    return response;
}

export const deleteProduct = async (pid) => {
    const response = await deleteDoc(doc(db,'products',pid));
    return response;
}

export const fetchProducts = async () => {
    const response = await getDocs(collection(db,'products'));
    return response;
}