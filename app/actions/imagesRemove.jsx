"use server";
import { utapi } from "../server/uploadthing";

export const imagesRemove = async () => {
  try {
    const files = await utapi.listFiles();
    const fileList = files.files.map((elem) => {
      return elem.key;
    });
    const b = await utapi.deleteFiles(fileList);
    let retu = b.success ? true : false;
    return retu;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
