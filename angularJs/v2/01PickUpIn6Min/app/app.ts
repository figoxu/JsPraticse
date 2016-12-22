import { Component } from '@angular/core';
import { MessagesInterface } from "./interface/Messages.interface.ts";
@Component({
    selector: 'app',
    styles: [
        `
.completed{
text-decoration: line-through;
}
`
    ],
    template: `<div>
<input type="text" [(ngModel)]="message" (keyup.ENTER)="onSubmit()" />
{{message}}
<ul>
<li *ngFor="let m of messages"
[ngClass]='{"completed" : m.completed}'
(click)="toggleMessage(m)">{{m.message}}</li>
</ul>
</div>`
})
export class AppComponent {
    private message: string = "amazing";
    private messages: MessagesInterface[] = [];
    onSubmit() {
        this.messages.push({
            message: this.message,
            completed: false
        });
        this.message = "";
    }
    toggleMessage(m) {
        m.completed = !m.completed;
    }
}