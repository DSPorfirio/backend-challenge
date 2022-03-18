import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Places {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  country: string;

  @Column()
  @IsNotEmpty()
  place: string;

  @Column()
  @IsNotEmpty()
  meta: string;

  @Column()
  @IsNotEmpty()
  urlFlag: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
