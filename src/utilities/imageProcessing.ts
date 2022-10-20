import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const imageProcessing = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  // original image path
  const myImage: string =
    path.join(__dirname, "../", "../", "/assets", "/images", filename) + ".jpg";

  // processed image path
  const resizedImage: string =
    path.join(__dirname, "../", "../", "/assets", "/resized_images", filename) +
    `-${width}-${height}.jpg`;

  // processed images folder path
  const resizedImagesFolder: string = path.join(
    __dirname,
    "../",
    "../",
    "/assets",
    "/resized_images"
  );

  // checking if the processed images folder exists or not
  if (!fs.ensureDir(resizedImagesFolder)) {
    await fs.mkdir(resizedImagesFolder);
  }

  // display the image without resizing
  if (!width && !height) {
    return myImage;
  }

  // cache [ checking if the resized image already exists or not ]
  if (!fs.existsSync(resizedImage)) {
    try {
      await sharp(myImage).resize(width, height).toFile(resizedImage);
      return resizedImage;
    } catch (err) {
      return "";
    }
  } else {
    return resizedImage;
  }
};

export default imageProcessing;
