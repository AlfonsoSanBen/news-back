import { Logger, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { NewsModule } from './news/news.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NewsModule,
    HttpModule,
  ],
  controllers: [NewsController],
  providers: [AppService, Logger, NewsService],
})
export class AppModule {}
