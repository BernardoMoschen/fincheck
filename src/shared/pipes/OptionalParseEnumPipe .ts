import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe<T> {
  override async transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    //TODO: -  remove this ugliness
    if (typeof value === 'undefined') {
      return undefined as T;
    }
    return super.transform(value, metadata);
  }
}
