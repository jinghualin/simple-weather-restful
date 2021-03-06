import { HttpServer } from "./httpServer";
import { RequestHandler, Server } from "restify";
import * as restify from "restify";
import { CONTROLLERS } from "../controllers/index";
import * as corsMiddleware from "restify-cors-middleware";

export class ApiServer implements HttpServer {

    private restify: Server;

    public get(url: string, requestHandler: RequestHandler): void {
        this.addRoute("get", url, requestHandler);
    }
    public post(url: string, requestHandler: RequestHandler): void {
        this.addRoute("post", url, requestHandler);
    }
    public put(url: string, requestHandler: RequestHandler): void {
        this.addRoute("put", url, requestHandler);
    }
    public del(url: string, requestHandler: RequestHandler): void {
        this.addRoute("del", url, requestHandler);
    }

    public start(port: number): void {
        this.restify = restify.createServer();
        const cors = corsMiddleware({
            origins: ["http://localhost:4200"],
            allowHeaders: ["X-App-Version"],
            exposeHeaders: []
        });
        this.restify.pre(cors.preflight);
        this.restify.use(cors.actual);

        this.restify.use(restify.plugins.queryParser());
        this.restify.use(restify.plugins.bodyParser());

        this.addControllers();
        this.restify.listen(port, () => console.log(`Server is running on port ${port}`));
    }

    private addRoute(method: "get" | "post" | "put" | "del", url: string, requestHandler: RequestHandler): void {
        this.restify[method](url, async (req, res, next) => {
            try {
                await requestHandler(req, res, next);
            } catch (error) {
                console.log(error);
                res.send(500, error);
            }
        });

        console.log(`Added route ${method.toUpperCase()} ${url}`);
    }

    private addControllers(): void {
        CONTROLLERS.forEach(controller => controller.initialize(this));
    }

}