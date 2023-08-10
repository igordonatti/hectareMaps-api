import { HttpStatus } from '@nestjs/common';

export const auth = {
  accessDenied: {
    statusCode: HttpStatus.FORBIDDEN,
    code: 'AU0001',
    message: 'Área restrita',
  },

  expiredToken: {
    statusCode: HttpStatus.UNAUTHORIZED,
    code: 'AU0002',
    message: 'Sessão expirada, faça login novamente!',
  },

  tokenNotProvided: {
    statusCode: HttpStatus.BAD_REQUEST,
    code: 'AU0003',
    message: 'Token não fornecido!',
  },

  updatedRequired: {
    statusCode: 426, // UPDATED_REQUIRED
    code: 'AU0004',
    message:
      'Foram realizadas alterações no seu perfil. Por favor, faça login novamente!',
  },

  unauthorized: {
    statusCode: HttpStatus.UNAUTHORIZED,
    code: 'AU0005',
    message: 'Acesso não autorizado',
  },

  errorOnValidateToken: {
    statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    code: 'AU0006',
    message: 'Erro ao verificar o token',
  },

  malformedToken: {
    statusCode: HttpStatus.BAD_REQUEST,
    code: 'AU0007',
    message: 'O token de autenticação está mal formado',
  },
};
