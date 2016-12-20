import { Component, Injectable, ViewChild, Directive, ViewContainerRef, TemplateRef } from '@angular/core'

@Injectable()
export class TemplateService{
    templates = new Map<string, TemplateRef<any>>()
}

@Component({
    selector:'template-storage',
    template:`
<template #header><h1>I'm a header</h1></template>
<template #footer><h2>I'm a footer</h2></template>
`
})
export class TemplateStorage{
    @ViewChild('header') headerTemplate
    @ViewChild('footer') footerTemplate

    constructor(private service:TemplateService){}

    ngAfterViewInit(){
        this.service.templates.set('header', this.headerTemplate)
        this.service.templates.set('footer', this.footerTemplate)
    }
}

@Directive({
    selector:'[surround]'
})
export class SurroundDirective{
    constructor(
        private service:TemplateService,
        private view:ViewContainerRef,
        private template:TemplateRef<any>
    ){}

    ngAfterViewInit(){
        this.view.createEmbeddedView(this.service.templates.get('header'))
        this.view.createEmbeddedView(this.template)
        this.view.createEmbeddedView(this.service.templates.get('footer'))
    }
}

@Component({
    selector: 'app',
    template: `
<template-storage></template-storage>

<button>One</button>
<button *surround>Two</button>
<button>Three</button>    
`
})
export class AppComponent{
}
