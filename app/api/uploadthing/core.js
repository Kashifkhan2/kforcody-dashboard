import { createUploadthing } from "uploadthing/next";

const func = createUploadthing();

export const ourFileRouter = {
  imageUploader: func({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("file url", file.url);
      return { imageUrl: file.url, success: true };
    }
  ),
};
