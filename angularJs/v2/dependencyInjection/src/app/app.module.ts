import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list.component';
import { DataService } from './data.service';
import { LogDebugger } from './log-debugger.service';
import { ConsoleService } from './console.service';
import { API_URL } from './app.tokens';
import { THIRD_PARTY_PROVIDERS } from './third-party';


// apiUrl is set to ./src/api to work in plunker

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true);
      },
      deps: [ConsoleService]
    },
    {
      provide: API_URL,
      useValue: './src/api'
    },
    THIRD_PARTY_PROVIDERS
    ],
  bootstrap: [ListComponent]
})
export class AppModule {
}
