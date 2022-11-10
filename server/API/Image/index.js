import express from 'express';
import { ImageModel } from '../../Database/allModels';
import multer from 'multer';

// Utilities
import { s3Upload } from '../../utils/AWS/s3';

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

const Router = express.Router();

/* 
    Route: /
    Description: upload any image to S3 bucket, and save file link to mongodb
    Parameters: None
    Access: Public
    Method: POST
*/
Router.post("/", upload.array('file', 4), async (request, response) => {
    try {
        const file = request.files;

        const bucketOptions = {
            Bucket: process.env.BUCKET_NAME,
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read" // Access control list
        }

        const uploadImage = await s3Upload(bucketOptions);

        return response.status(200).json({ uploadImage });

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
})

export default Router;