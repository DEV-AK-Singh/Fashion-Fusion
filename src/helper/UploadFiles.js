import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const uploadSingleFile = async (file,type,id) => {
    const storage = getStorage();
    const storageRef = ref(storage, `${type}/${id}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}