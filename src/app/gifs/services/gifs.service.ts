import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistoty: string[] = [];
  private apiKey: string = 'po9TXI4PntlVeD5szLyjuysw58h4M8dF';
  private serviceUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistoty];
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((response: any) => {
        this.gifList = response.data;
      });
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagHistoty.includes(tag)) {
      this._tagHistoty = this._tagHistoty.filter((t) => t !== tag);
    }

    this._tagHistoty.unshift(tag);
    this._tagHistoty = this._tagHistoty.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistoty));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (!history) return;
    this._tagHistoty = JSON.parse(history!);

    if (this._tagHistoty.length === 0) return;
    this.searchTag(this._tagHistoty[0]);
  }

}
