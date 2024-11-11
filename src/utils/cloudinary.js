// cloudary se code dekh ka or v2 ko ek custom nam den ais a good practice 
import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // by default node js library file system managment library unlike path search in documentary 
// after successfully installed we also have to delete the file from our server 

// clodnary config 
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret:   process.env.CLOUDINARY_API_SECRET
    });


   //ek parameter banata hu jisma local variable ka path doge or upload hone ke baad unlink  


   const uploadCloudnary = async (localFilepath) =>{
    try {
      if(!localFilepath) return null
      //upload file cloudinary 
     const response = await  cloudinary.uploader.upload(localFilepath,{
        resource_type:"auto" //khud detect kar lo 
      })
      //foile has been uploaded successsfully 
      console.log(`file uploaded successfully ${response.url} `);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilepath) //remove the locally  saved temporary file as the upload operation got failed 
      return null;
    }
   }

export {uploadCloudnary}