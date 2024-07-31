"use server";
import { utapi } from "../server/uploadthing";

export const imageRemove = async (imageKey) => {
  try {
    const a = imageKey.split("/");
    const b = a ? await utapi.deleteFiles(a.slice(-1)[0]) : false;
    let retu = b.success ? true : false;
    return retu;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
