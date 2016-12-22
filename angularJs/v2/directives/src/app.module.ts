import { NgModule,  } from '@angular/core'
import {  } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent, TemplateStorage, TemplateService, SurroundDirective } from './app.component'

const imports = [BrowserModule]
const bootstrap = [AppComponent]
const declarations = [
    AppComponent,
    TemplateStorage,
    SurroundDirective
]
const providers = [
    TemplateService
]

@NgModule({
    imports,
    declarations,
    bootstrap,
    providers
})
export class AppModule {}