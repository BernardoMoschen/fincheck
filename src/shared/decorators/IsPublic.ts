import { SetMetadata } from '@nestjs/common';

const IsPublic = () => SetMetadata(IsPublicKey, true);
const IsPublicKey = 'IS_PUBLIC';

export { IsPublic, IsPublicKey };
