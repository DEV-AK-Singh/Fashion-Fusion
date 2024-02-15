import { deleteDoc, doc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

// orderID,name,email,phone,product,qty,price,orderTotal,paymentMethod,paymentStatus,txnID,shippingMethod,orderStatus,orderDate

export const addOrder = async (orderID,name,email,phone,product,qty,price,orderTotal,paymentMethod,paymentStatus,txnID,shippingMethod,orderStatus,orderDate) => {
    const response = await setDoc(doc(db,'orders',orderID),{orderID,name,email,phone,product,qty,price,orderTotal,paymentMethod,paymentStatus,txnID,shippingMethod,orderStatus,orderDate});
    return response;
}

export const updateOrder = async (orderID,name,email,phone,product,qty,price,orderTotal,paymentMethod,paymentStatus,txnID,shippingMethod,orderStatus,orderDate) => {
    const response = await updateDoc(doc(db,'orders',orderID),{orderID,name,email,phone,product,qty,price,orderTotal,paymentMethod,paymentStatus,txnID,shippingMethod,orderStatus,orderDate});
    return response;
}

export const deleteOrder = async (orderID) => {
    const response = await deleteDoc(doc(db,'orders',orderID));
    return response;
}

export const fetchOrders = async () => {
    const response = await getDocs(collection(db,'orders'));
    return response;
}