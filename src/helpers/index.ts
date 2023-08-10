import { HttpStatus } from '@nestjs/common';
import { enumHelper } from './enum.helper';
import { customError } from './customError';

const httpStatusCode = HttpStatus;
const enumHelperExport = enumHelper;
const customErrorExport = customError;

export const helpers = { httpStatusCode, enumHelperExport, customErrorExport };
