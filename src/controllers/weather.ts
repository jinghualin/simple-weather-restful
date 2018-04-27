import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { weatherService } from "../services/weather";
import { Request, Response } from "restify";

export class WeatherController implements Controller {
    public initialize(httpServer: HttpServer): void {
        httpServer.get("/cities/:id/weather", this.getWeatherById.bind(this));
    }

    private async getWeatherById(req: Request, res: Response): Promise<void> {
        const weather = await weatherService.getWeatherById(req.params.id);
        res.send(weather ? 200 : 404, weather);
    }
}