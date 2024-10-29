import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  override async transform(
    value: string,
    metadata: ArgumentMetadata,
  ): Promise<string> {
    console.log(typeof value);
    //TODO: -  remove this ugliness
    if (typeof value === 'undefined' || !value.length) {
      return undefined as unknown as string;
    }
    return super.transform(value, metadata);
  }
}
