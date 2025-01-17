import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  nome: string;
}
