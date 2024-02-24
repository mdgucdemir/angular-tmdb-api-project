import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  constructor() {}

  public apiConfig = {
    originalImage: (imgPath: string) =>
      `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) =>
      `https://image.tmdb.org/t/p/w500/${imgPath}`,
  };
}
