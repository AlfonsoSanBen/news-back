import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller('news')
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get('/')
  @ApiOperation({ summary: 'Get news' })
  @ApiResponse({ status: 200, description: 'News found' })
  @ApiResponse({ status: 400, description: 'News not found' })
  @ApiResponse({ status: 500, description: 'Internal Error' })
  @ApiImplicitQuery({
    name: 'q',
    required: false,
    type: String,
  })
  getNews(@Query('q') q: string) {
    if (q) return this.newsService.getNewsByKeyWord(q);
    else return this.newsService.listNews();
  }
}
