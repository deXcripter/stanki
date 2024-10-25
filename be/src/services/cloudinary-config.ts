import { v2 as cloudinary } from 'cloudinary';
import EnviromentConfig from '../config';

cloudinary.config({
  cloud_name: EnviromentConfig.CLOUDINARY.NAME,
  api_key: EnviromentConfig.CLOUDINARY.KEY,
  api_secret: EnviromentConfig.CLOUDINARY.SECRET,
});

export default cloudinary;
