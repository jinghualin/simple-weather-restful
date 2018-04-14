import * as rp from "request-promise";
import { City, Geoname } from "../models/city";


export class CityService {
    private static BASE_URL: string = "http://api.geonames.org/";
    private static USERNAME: string = "jinghualin";
    private static RADIUS: string = "10";


    public async getCity(cityId: string): Promise<City> {
        const subUrl: string = "getJSON";
        const option: any = {
            uri: CityService.BASE_URL + subUrl,
            qs: {
                geonameId: cityId,
                username: CityService.USERNAME
            }
        };

        try {
            const response = await rp(option);
            console.log(`response for cityID ${cityId}`);
            return JSON.parse(response);
        } catch (error) {
            console.log(`error ${error} retrieving geoname for cityId ${cityId}`);
            return undefined;
        }

    }
}

export const cityService  = new CityService();