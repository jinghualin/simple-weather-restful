import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { CityService, cityService } from "../services/city";
import { Request, Response } from "restify";


export class CityController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get("/cities", this.getCities.bind(this));
        httpServer.get("/cities/:id", this.getCityById.bind(this));
    }

    private async getCityById(req: Request, res: Response): Promise<void> {
        const city = await cityService.getCity(req.params.id);
        res.send(city ? 200 : 404, city);
    }
    private async getCities(req: Request, res: Response): Promise<void> {
        res.send(await cityService.getCities(req.query.lat, req.query.lng));
    }
}