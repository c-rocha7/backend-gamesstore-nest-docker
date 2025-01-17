import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { ILike, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto) private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
    });

    if (!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    return produto;
  }

  async findByTitulo(titulo: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
    });
  }

  async findByPrecoMoreThanASC(preco: number): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        preco: MoreThan(preco),
      },
      order: {
        preco: 'ASC',
      },
    });
  }

  async findByPrecoLessThanDESC(preco: number): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        preco: LessThan(preco),
      },
      order: {
        preco: 'DESC',
      },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.save(produto);
  }
}
