import AppError from '../../../utils/app-error';

const handleUniqueValueErrors = (error: any): AppError => {
  const duplicateField = Object.keys(error.keyValue)[0];
  const duplicateValue = error.keyValue[duplicateField];
  const message = `Duplicate field value: "${duplicateValue}". Please use a different value for ${duplicateField}.`;
  return new AppError(message, 400);
};

export default handleUniqueValueErrors;
