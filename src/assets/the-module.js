(function (System, SystemJS) {
    "bundle";
    !function (a) {
        System.registerDynamic("the-module", ["@angular/common", "@angular/core", "ids-enterprise-ng"], !1, function (b, c, d) {
            return "function" == typeof a ? a.call(c, b, c, b("@angular/common"), b("@angular/core"), b("ids-enterprise-ng")) : a
        })
    }(function (a, b) {
        "use strict";
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var c = a("@angular/common")
            , d = a("@angular/core")
            , e = a("ids-enterprise-ng")
        var h = function () {
            function a() {
                this.message = "This button should be blue if IDS works in the dynamic component.";
            }
            return a.prototype.ngOnInit = function () {
                console.log("TheComponent ngOnInit")
            }
                ,
                __decorate([d.ViewChild("view", {
                    read: d.ViewContainerRef,
                    static: !1
                }), __metadata("design:type", d.ViewContainerRef)], a.prototype, "view", void 0),
                a = __decorate([d.Component({
                    selector: "the-component",
                    template: '<button soho-button="primary" #view>{{message}}</button>\n<soho-listview><li soho-listview-item><p soho-listview-header>List Header</p></li></soho-listview>'
                }), __metadata("design:paramtypes", [])], a)
        }();
        b.TheComponent = h;
        var i = function () {
            function a() { }
            return a.prototype.ngDoBootstrap = function () { }
                ,
                a = __decorate([d.NgModule({
                    imports: [c.CommonModule, e.SohoComponentsModule],
                    declarations: [h],
                    entryComponents: [h]
                })], a)
        }();
        b.TheModule = i
    });
}
)(System, System);
