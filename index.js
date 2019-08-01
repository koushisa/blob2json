import fileReader from ".util/fileReader";

export default async blob => {
    const blobText = await fileReader(blob);
    return JSON.parse(blobText);
};