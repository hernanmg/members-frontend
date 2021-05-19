import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public activeLang = 'es';

  constructor(public translate: TranslateService) {
    translate.addLangs(['es','en', 'pt']);
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }

  public switchLanguage(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
