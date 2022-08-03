import { getStorage, listAll, ref } from "firebase/storage";
import app from '../../../firebase';

export async function fetchImagesFromDmTeam() {
    const storage = getStorage(app);
    const imgStorageRef = ref(storage, "DomainManagers/");

    try {
        const response = await listAll(imgStorageRef);
        console.log(response);
        var listOfImg = [];
        response.items.forEach((item) => {
            listOfImg.push(item);
        });

        console.log(listOfImg);
        return listOfImg;
    } catch (err) {
        console.log(err);
    }
}