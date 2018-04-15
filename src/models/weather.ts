export interface WeatherData {
    coord: Coord;
    sys: Sys;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Cloud;
    dt: number;
    id: number;
    name: string;
    cod: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Cloud {
    all: number;
}