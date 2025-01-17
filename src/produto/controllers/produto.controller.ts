import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../entities/produto.entity';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('titulo') titulo: string): Promise<Produto[]> {
    return this.produtoService.findByTitulo(titulo);
  }

  @Get('/preco/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoMoreThanASC(
    @Param('preco', ParseFloatPipe) preco: number,
  ): Promise<Produto[]> {
    return this.produtoService.findByPrecoMoreThanASC(preco);
  }

  @Get('/preco/menor/:preco')
  @HttpCode(HttpStatus.OK)
  findByPrecoLessThanDESC(
    @Param('preco', ParseFloatPipe) preco: number,
  ): Promise<Produto[]> {
    return this.produtoService.findByPrecoLessThanDESC(preco);
  }
}
