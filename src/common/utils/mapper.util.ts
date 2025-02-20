import { plainToInstance } from 'class-transformer';

export function mapToDto<T, V>(
  dtoClass: new (...arg: any[]) => T,
  entity: V,
): T {
  return plainToInstance(dtoClass, entity, { excludeExtraneousValues: true });
}

export function mapToDtos<T, V>(
  dtoClass: new (...arg: any[]) => T,
  entities: V[],
): T[] {
  return plainToInstance(dtoClass, entities, { excludeExtraneousValues: true });
}
