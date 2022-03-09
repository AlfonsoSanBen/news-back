import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class NewsService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(private http: HttpService, private config: ConfigService) {
    this.baseUrl = this.config.get('NEWS_BASE_URL');
    this.apiKey = this.config.get('API_NEWS_SECRET');
  }

  async listNews() {
    const url = `${this.baseUrl}/everything?q=latest&apiKey=${this.apiKey}`;
    console.log(url);
    return this.http.get(url).pipe(map((resp) => resp.data));
  }

  async getNewsByKeyWord(keyword: string) {
    const url = `${this.baseUrl}/everything?q=${keyword}&apiKey=${this.apiKey}`;
    console.log(url);
    return this.http.get(url).pipe(map((resp) => resp.data));
  }
}
