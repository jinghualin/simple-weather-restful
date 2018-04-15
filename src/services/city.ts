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

    public async getCities(lat: string, lng: number): Promise<Geoname[]> {
        const subUrl: string = "findNearbyPlaceNameJSON";
        const option: any = {
            uri: CityService.BASE_URL + subUrl,
            qs: {
                lat: lat,
                lng: lng,
                radius: CityService.RADIUS,
                username: CityService.USERNAME
            }
        };
        try {
            const response = await rp(option);
            console.log(`response for lat ${lat} : lng ${lng}`);
            return JSON.parse(response).geoname;
        } catch (error) {
            console.log(`error ${error} retrieving cities for lat ${lat} : lng ${lng}`);
            return undefined;
        }
    }
}

export const cityService  = new CityService();