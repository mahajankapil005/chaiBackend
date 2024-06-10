import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDIANRY_API_KEY, 
    api_secret: process.env.CLOUDIANRY_API_SECRET // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
            
            //upload file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            // file has been uplaod successfully
            console.log("file is uploaded on cloudinary", response.url);
            return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath) 
        // remmove the locally saved temp files as the upload operation got failed

    }
}


export {uploadOnCloudinary}
// Upload an image
// cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//    {public_id: "shoes" },
//    function(error, result){
//     console.log(result);
//    }
// });