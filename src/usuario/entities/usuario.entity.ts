import { IsDate, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { Transform, TransformFnParams, Type } from 'class-transformer';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  @Column({ type: 'date', nullable: false })
  data_nascimento: Date;

  @Column({ length: 5000 })
  foto: string;

  @OneToMany(() => Produto, (produto) => produto.usuario, {
    onDelete: 'CASCADE',
  })
  produto: Produto[];
}
