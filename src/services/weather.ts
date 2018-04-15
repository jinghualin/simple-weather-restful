import { WeatherData } from "../models/weather";
import * as rp from "request-promise";

export class WeatherService {
    private static BASE_URL: string = "http://api.openweathermap.org/data/2.5/";
    private static API_KEY: string = "5a873ac5f17e41c5acbf36d3e0894216";

    public async getWeatherById(cityId: string): Promise<WeatherData> {
        const option: any = {
            uri: WeatherService.BASE_URL + "weather",
            qs: {
                id: cityId,
                appId: WeatherService.API_KEY
            }
        };
        try {
            const response = await rp(option);
            console.log(`response weather data for cityID ${cityId}`);
            return JSON.parse(response);
        } catch (error) {
            console.log(`error ${error} retrieving weather for cityId ${cityId}`);
            return undefined;
        }
    }
}

export const weatherService = new WeatherService();