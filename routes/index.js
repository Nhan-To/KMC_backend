import { itemRouter } from "../routes/itemRouter.js"
import { soldItemRouter } from "./soldItemRouter.js"

const routes = [
    {
        path: '/items',
        router: itemRouter
    },
    {
        path: '/soldItems',
        router: soldItemRouter
    }
]

const routesFn = (app) => {

    routes.forEach((route) => {
        if (route.path === '/items'){
            app.use(route.path, route.router);
        }
        else if (route.path === '/soldItems') {
            app.use(route.path, route.router);
        }
    });
}

export default routesFn;