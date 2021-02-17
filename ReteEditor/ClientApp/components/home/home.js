var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Vue from "vue";
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeComponent.prototype.initialize = function () {
        console.log("hello");
    };
    HomeComponent.prototype.mounted = function () {
        this.initialize();
        console.log("hello");
    };
    return HomeComponent;
}(Vue));
export default HomeComponent;
;
//# sourceMappingURL=home.js.map