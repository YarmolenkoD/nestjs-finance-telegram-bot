import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'float' })
  sum: number

  @Column({ type: 'string' })
  category: string

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
