import {RouterModule} from "@angular/router";

const routes = [
    {path: '', loadChildren: 'app/table/table.module'}
];

export default RouterModule.forRoot(routes);
