import { CoreTranslationLoaderService } from './config/translation-loader.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as corePortuguese } from '../assets/i18n/pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string;

  table = true;

  constructor(
    private _translateService: TranslateService,
    private _coreTranslationLoaderService: CoreTranslationLoaderService
  ) {

    this._translateService.addLangs(['pt']);

    this._translateService.setDefaultLang('pt');
    
    this._coreTranslationLoaderService.loadTranslations(corePortuguese);

    this._translateService.use('pt');
  };

  ngOnInit() {
  }
}
