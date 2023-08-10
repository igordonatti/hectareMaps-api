import { customError } from './customError';

export const enumHelper = {
  user: {
    roles: {
      admin: 'ADMIN',
      regularUser: 'USER',
    },
    status: {
      active: 'ACTIVE',
      update: 'UPDATE',
      new: 'NEW',
      blocker: 'BLOCKED',
    },
    errorsWithRequiresLogin: [
      customError.auth.errorOnValidateToken.code,
      customError.auth.expiredToken.code,
      customError.auth.malformedToken.code,
      customError.auth.tokenNotProvided.code,
      customError.auth.unauthorized.code,
      customError.auth.updatedRequired.code,
      customError.auth.accessDenied.code,
    ],
  },
};
