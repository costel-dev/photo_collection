import { useState ,useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";    

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null); // this will the state for our image url that will get back from firebase

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images"); // we need to create a collection 'images' inside our firebase

        storageRef.put(file).on("state_changed", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const imageUrl = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: imageUrl, createdAt })
            setUrl(imageUrl);
        })
    }, [file]);

    return { progress, url, error };
}

export default useStorage;