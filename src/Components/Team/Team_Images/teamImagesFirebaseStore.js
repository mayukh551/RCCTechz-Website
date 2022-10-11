import { getStorage, listAll, ref } from "firebase/storage";
import app from '../../../firebase';

export async function fetchImagesFromFirebase(path) {
    try {
        const storage = getStorage(app);
        const imgStorageRef = ref(storage, path);
        const response = await listAll(imgStorageRef);
        console.log(response);
        var listOfImg = [];
        response.items.forEach((item) => {
            listOfImg.push(item);
        });

        console.log(listOfImg);
        return listOfImg;
    } catch (err) {
        throw new Error('failed to fetch images');
    }
}