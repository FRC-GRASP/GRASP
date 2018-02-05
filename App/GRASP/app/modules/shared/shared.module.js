"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var side_drawer_directives_1 = require("nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives");
var side_drawer_page_1 = require("./side-drawer-page");
var borderless_btn_directive_1 = require("./borderless-btn.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
            ],
            declarations: [
                side_drawer_page_1.SideDrawerPageComponent,
                borderless_btn_directive_1.BorderlessBtnDirective
            ],
            exports: [
                side_drawer_page_1.SideDrawerPageComponent,
                borderless_btn_directive_1.BorderlessBtnDirective
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDRHQUFtSDtBQUVuSCx1REFBNkQ7QUFDN0QsdUVBQW9FO0FBZ0JwRTtJQUFBO0lBRUEsQ0FBQztJQUZZLFlBQVk7UUFkeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsdURBQThCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDBDQUF1QjtnQkFDdkIsaURBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLDBDQUF1QjtnQkFDdkIsaURBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FFeEI7SUFBRCxtQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlcyc7XG5cbmltcG9ydCB7IFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLWRyYXdlci1wYWdlJztcbmltcG9ydCB7IEJvcmRlcmxlc3NCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2JvcmRlcmxlc3MtYnRuLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcbiAgICBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcbiAgICBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcblxufVxuIl19