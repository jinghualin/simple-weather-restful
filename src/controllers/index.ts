import { PingController } from "./ping";
import { CityController } from "./city";
import { WeatherController } from "./weather";

export const CONTROLLERS = [
    new PingController(),
    new CityController(),
    new WeatherController()
];