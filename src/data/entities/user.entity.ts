import { BaseEntity } from '@entities/base.entity';
import { Exclude } from 'class-transformer';
import { Column } from 'typeorm';

export class UserEntity extends BaseEntity {
  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Exclude()
  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @Column({ name: 'zip_code', nullable: false })
  zipCode: number;
}
