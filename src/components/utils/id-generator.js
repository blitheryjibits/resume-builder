import { SHA256 } from "crypto-js";

const generateUniqueId = (string, existingIds) => {

    let newId;
    let counter = 0
    do {
        newId = SHA256(string + counter.toString).toString();
        counter++;
    } while (existingIds.includes(newId));

    return newId;
}

export default generateUniqueId;