import {
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const addOrder = async (
  orderID,
  orderStatus,
  orderDate,
  orderTotal,
  paymentStatus,
  paymentMethod,
  shippingAddress,
  shippingMethod,
  name,
  email,
  mobile,
  state,
  cart,
  productsQty,
  txnID,
) => {
  const response = await setDoc(doc(db, "orders", orderID), {
    orderID,
    orderStatus,
    orderDate,
    orderTotal,
    paymentStatus,
    paymentMethod,
    shippingAddress,
    shippingMethod,
    name,
    email,
    mobile,
    user:state,
    cart,
    productsQty,
    txnID,
  });
  return response;
};

export const updateOrder = async (
    orderID,
    orderStatus,
    orderDate,
    orderTotal,
    paymentStatus,
    paymentMethod,
    shippingAddress,
    shippingMethod,
    name,
    email,
    mobile,
    cart,
    productsQty,
    txnID,
) => {
  const response = await updateDoc(doc(db, "orders", orderID), {
    orderID,
    orderStatus,
    orderDate,
    orderTotal,
    paymentStatus,
    paymentMethod,
    shippingAddress,
    shippingMethod,
    name,
    email,
    mobile,
    cart,
    productsQty,
    txnID,
  });
  return response;
};

export const deleteOrder = async (orderID) => {
  const response = await deleteDoc(doc(db, "orders", orderID));
  return response;
};

export const fetchOrder = async (orderID) => {
  const response = await getDoc(doc(db, "orders", orderID));
  if (response.exists()) {
    return {
      code:1,
      data:response.data()
    }
  } else {
    return {
      code:0,
      msg:"Order Not Found!!!"
    };
  }
};

export const fetchOrders = async () => {
  const response = await getDocs(collection(db, "orders"));
  console.log(response.docs());
  return response;
};
