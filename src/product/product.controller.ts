
import { Controller, Get, Body, Post, Param, Put, Delete } from '@nestjs/common';
import { ProductCreateDto } from './dto/product-create.dto';
import { ProductService } from './product.service';

@Controller()
export class ProductController { 
    constructor(
        private readonly ProductService: ProductService
    ) {
    }

    @Get('admin/products')
    async all() {
        return this.ProductService.find({})
    }
    
    @Post('admin/products')
    async create(@Body() body: ProductCreateDto) {
        return this.ProductService.save(body)
    }

    @Get('admin/products/:id')
    async get(@Param('id') id: number) {
        return this.ProductService.findOne({id})
    }

    @Put('admin/products/:id')
    async update(
        @Param('id') id: number,
        @Body() body: ProductCreateDto
        ) {
            await this.ProductService.update(id, body)
            
            return this.ProductService.findOne({id})
        }

    @Delete('admin/products/:id')
    async delete(
        @Param('id') id: number) {
            return this.ProductService.delete(id)
        }
}
