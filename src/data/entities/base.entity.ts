import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'LOCALTIMESTAMP',
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'LOCALTIMESTAMP',
    name: 'updated_at',
  })
  updatedAt?: Date;

  @Column({ nullable: true, name: 'created_by' })
  createdBy?: string;

  @Column({ nullable: true, name: 'updated_by' })
  updatedBy?: string;
}
