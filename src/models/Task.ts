import {
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Index('pkey_task', ['id'], { unique: true })
@Entity('task', { schema: 'public' })
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'descricao', type: 'varchar', nullable: false, length: 255 })
  descricao: string;

  @Column({
    name: 'estado',
    type: 'boolean',
    nullable: false,
    default: false,
  })
  estado: boolean;

  @CreateDateColumn({
    name: 'created_At',
    type: 'timestamp',
    default: 'now()',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'updated_At',
    type: 'timestamp',
    default: 'now()',
  })
  updatedAt: Date;
}
