import { SetApplication } from "./app"

class ServerApplication {
    static start(): void {
        const application = new SetApplication( 8080 );
        application.init();
        application.start();
    }
}

ServerApplication.start()