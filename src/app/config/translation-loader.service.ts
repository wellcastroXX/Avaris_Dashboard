import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale } from './../../assets/i18n/pt';

export interface ILocale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class CoreTranslationLoaderService {

  constructor(
    private _translateService: TranslateService
  ) {

  }

  /**
   * Load translations
   * 
   * @param {ILocale} args
   */
  loadTranslations(...args: ILocale[]): void {
    const locales = [...args];

    locales.forEach((locale) => {
      this._translateService.setTranslation(locale.lang, locale.data, true);
    });
  }
}