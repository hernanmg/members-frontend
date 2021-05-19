
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

//COMPONENTS
import {
    TranslationComponent
} from './translate-index'


export const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'translate', component: TranslationComponent, }
        ]
    }

]

@NgModule({
    declarations: [
        TranslationComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        TranslationComponent,
       
    ]
})
export class TranslationModule {
    constructor() {

    }
}
