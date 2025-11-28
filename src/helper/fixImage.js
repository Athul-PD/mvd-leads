export function fixImages(path){
    return path.replace("../src/assets/images","/images")
    .replace("./src/assets/images","/images")
    .replace("src/assets/images","/images")
}