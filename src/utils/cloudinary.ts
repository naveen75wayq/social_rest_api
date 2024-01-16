import cloudinary from 'cloudinary';
import { CLOUD_NAME, CLOUD_API, CLOUD_API_SECRET } from '../loadEnvironment';
export default cloudinary.v2.config(
    {
        cloud_name: CLOUD_NAME,
        cloud_api: CLOUD_API,
        api_secret: CLOUD_API_SECRET
    }
)
