import { ModuleWithProviders } from "@angular/core";
import { Routes, ExtraOptions } from "@angular/router";
import { LocationState } from "./router/ns-location-strategy";
export { PageRoute } from "./router/page-router-outlet";
export { RouterExtensions } from "./router/router-extensions";
export { NSModuleFactoryLoader } from "./router/ns-module-factory-loader";
export declare type LocationState = LocationState;
export declare class NativeScriptRouterModule {
    static forRoot(routes: Routes, config?: ExtraOptions): ModuleWithProviders;
    static forChild(routes: Routes): ModuleWithProviders;
}
