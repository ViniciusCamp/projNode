import { Router } from 'express';
import UserRouter from '@src/app/controller/User';

class Routes {
    static define(router: Router): Router {
        router.use('/users', UserRouter);
        return router;
    }
}

export default Routes.define(Router());
