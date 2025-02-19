import { BaseEntity } from '@core/entities/base.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { File } from './file.entity';
import { Category } from './category.entity';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  productName: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 0 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => File, (file) => file.product, { cascade: true })
  images: File[];

  @ManyToOne(() => Category, (category) => category.products, {
    nullable: false,
  })
  category: Category;
}
