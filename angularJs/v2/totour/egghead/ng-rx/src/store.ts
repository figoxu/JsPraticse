
import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {clock,people} from './reducers'
@NgModule({
  imports:[StoreModule.provideStore({clock,people})]
})
export class AppStoreModule {

}

