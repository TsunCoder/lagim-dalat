import { BaseEntity } from '@src/core/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity('files')
export class File extends BaseEntity {
  @Column({ type: 'varchar', length: 500 })
  url: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
