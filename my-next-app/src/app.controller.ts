import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }
  @Get('/api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    console.log('Requested article ID:', id); // 调试用日志
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return ARTICLES.find((article) => article._id === id);
  }
}
