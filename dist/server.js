"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
class ServerApplication {
    static start() {
        const application = new app_1.SetApplication(8080);
        application.init();
        application.start();
    }
}
ServerApplication.start();
//# sourceMappingURL=server.js.map