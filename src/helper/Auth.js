import { deleteDoc, doc, getDoc, getDocs, collection, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../firebase";

export const login = async (email,password) => {
    let response = await getDoc(doc(db,'users',email));
    if(response.exists()){
        let data = response.data();
        if(data.password == password){
            return {statusCode:1,statusMsg:"Logged In",userData:data};
        }else{
            return {statusCode:2,statusMsg:"Wrong Password"};
        }
    }else{
        return {statusCode:0,statusMsg:"User Not Exists"};
    }
}

export const signUp = async (fullname,mobile,email,password,address,city,state,country,zipcode) => {
    let response = await getDoc(doc(db,'users',email));
    if(response.exists()){
        return {statusCode:0,statusMsg:"User Already Exists"};
    }else{
        let data = await setDoc(doc(db,'users',email),{fullname,mobile,email,password,address,city,state,country,zipcode})
        return {statusCode:1,statusMsg:"User Create Successfully",data};
    }
}

export const forgetPassword = async (email) => {
    let response = await getDoc(doc(db,'users',email));
    if(response.exists()){
        return "sent otp to registered mail";    
    }else{
        return {statusCode:0,statusMsg:"User Not Exists"};
    }
}

export const resetPassword = async (email,password) => {
    let response = await updateDoc(doc(db,'users',email),{password})
    return response;
}

// name,email,password,phone,shippingAddress,country,state,city,postalCode,DOB,gender,profilePicture

export const updateUsers = async (email,fullname,mobile,password,address,city,state,country,zipcode,DOB,gender,profilePicture) => {
    let response = await updateDoc(doc(db,'users',email),{fullname,mobile,password,address,city,state,country,zipcode,DOB,gender,profilePicture})
    return response;
}

export const allUsers = async () => {
    let response = await getDocs(collection(db,'users'))
    return response;
}

export const deleteUser = async (email) => {
    let response = await deleteDoc(doc(db,'users',email))
    return response;
}