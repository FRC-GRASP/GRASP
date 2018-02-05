"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var application = require("application");
/**
 * Android Only.
 *
 * Directive which removes border from the button when applied on android.
 */
var BorderlessBtnDirective = /** @class */ (function () {
    function BorderlessBtnDirective(_el) {
        this._el = _el;
    }
    BorderlessBtnDirective.prototype.setBorderlessBackground = function () {
        var outValue = new android.util.TypedValue();
        application.android.context.getTheme().resolveAttribute(android.R.attr.selectableItemBackground, outValue, true);
        this.nsBtn.android.setBackgroundResource(outValue.resourceId);
    };
    BorderlessBtnDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (platform_1.isAndroid) {
            this.nsBtn = this._el.nativeElement;
            // if the view has already loaded - set immediately
            if (this.nsBtn.isLoaded) {
                this.setBorderlessBackground();
            }
            // Attach the setter for future loaded events
            this.nsBtn.on('loaded', function () { _this.setBorderlessBackground(); });
        }
    };
    BorderlessBtnDirective.prototype.ngOnDestroy = function () {
        // Cleanup
        if (platform_1.isAndroid) {
            this.nsBtn.off('loaded');
            this.nsBtn = undefined;
        }
    };
    BorderlessBtnDirective = __decorate([
        core_1.Directive({
            selector: '.borderless-btn'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], BorderlessBtnDirective);
    return BorderlessBtnDirective;
}());
exports.BorderlessBtnDirective = BorderlessBtnDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9yZGVybGVzcy1idG4uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLHFDQUFxQztBQUNyQyx5Q0FBMkM7QUFJM0M7Ozs7R0FJRztBQUlIO0lBSUUsZ0NBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUksQ0FBQztJQUV4Qyx3REFBdUIsR0FBdkI7UUFDRSxJQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsZ0JBQWdCLENBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQ3hELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhDLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztZQUU1QyxtREFBbUQ7WUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUNqQyxDQUFDO1lBRUQsNkNBQTZDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxjQUFRLEtBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0UsVUFBVTtRQUNWLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFsQ1Usc0JBQXNCO1FBSGxDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1NBQzVCLENBQUM7eUNBS3lCLGlCQUFVO09BSnhCLHNCQUFzQixDQW1DbEM7SUFBRCw2QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAndWkvYnV0dG9uJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5cbi8qKlxuICogQW5kcm9pZCBPbmx5LlxuICpcbiAqIERpcmVjdGl2ZSB3aGljaCByZW1vdmVzIGJvcmRlciBmcm9tIHRoZSBidXR0b24gd2hlbiBhcHBsaWVkIG9uIGFuZHJvaWQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJy5ib3JkZXJsZXNzLWJ0bidcbn0pXG5leHBvcnQgY2xhc3MgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIG5zQnRuOiBCdXR0b247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHNldEJvcmRlcmxlc3NCYWNrZ3JvdW5kKCkge1xuICAgIGxldCBvdXRWYWx1ZSA9IG5ldyBhbmRyb2lkLnV0aWwuVHlwZWRWYWx1ZSgpO1xuICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQuY29udGV4dC5nZXRUaGVtZSgpLnJlc29sdmVBdHRyaWJ1dGUoXG4gICAgICBhbmRyb2lkLlIuYXR0ci5zZWxlY3RhYmxlSXRlbUJhY2tncm91bmQsIG91dFZhbHVlLCB0cnVlXG4gICAgKTtcbiAgICB0aGlzLm5zQnRuLmFuZHJvaWQuc2V0QmFja2dyb3VuZFJlc291cmNlKG91dFZhbHVlLnJlc291cmNlSWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5uc0J0biA9IDxCdXR0b24+dGhpcy5fZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgLy8gaWYgdGhlIHZpZXcgaGFzIGFscmVhZHkgbG9hZGVkIC0gc2V0IGltbWVkaWF0ZWx5XG4gICAgICBpZiAodGhpcy5uc0J0bi5pc0xvYWRlZCkge1xuICAgICAgICB0aGlzLnNldEJvcmRlcmxlc3NCYWNrZ3JvdW5kKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGFjaCB0aGUgc2V0dGVyIGZvciBmdXR1cmUgbG9hZGVkIGV2ZW50c1xuICAgICAgdGhpcy5uc0J0bi5vbignbG9hZGVkJywgKCkgPT4geyB0aGlzLnNldEJvcmRlcmxlc3NCYWNrZ3JvdW5kKCk7IH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIENsZWFudXBcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICB0aGlzLm5zQnRuLm9mZignbG9hZGVkJyk7XG4gICAgICB0aGlzLm5zQnRuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19