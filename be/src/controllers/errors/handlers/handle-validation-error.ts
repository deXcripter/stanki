import AppError from '../../../utils/app-error';

const handleValidationErrors = (err: any) => {
  const errors = Object.values(err.errors).map((el: any) => el.message);
  const message = `Validation failed: ${errors.join('. ')}`;
  err = new AppError(message, 400);
  return err;
};

export default handleValidationErrors;
