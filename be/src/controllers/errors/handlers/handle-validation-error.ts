import AppError from '../../../utils/app-error';

const handleValidationErrors = (err: AppError) => {
  return new AppError(err.message, 400);
};

export default handleValidationErrors;
