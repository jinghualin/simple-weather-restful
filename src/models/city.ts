export interface Geoname {
    lng: number;
    geonameId: number;
    countrycode: string;
    name: string;
    fclName: string;
    toponymName: string;
    fcodeName: string;
    wikipedia: string;
    lat: number;
    fcl: string;
    population: number;
    fcode: string;
}

export interface City {
    lng: string;
    geonameId: number;
    toponymName: string;
    asciiName: string;
    astergdem: number;
    fcl: string;
    population: number;
    wikipediaURL: string;
    adminName5: string;
    srtm3: number;
    adminName4?: string;
    adminName3?: string;
    alternateNames: AlternateName[];
    adminName2?: string;
    name: string;
    fclName: string;
    fcodeName: string;
    adminName1?: string;
    lat: string;
    fcode: string;
}

interface AlternateName {
    name: string;
    lang: string;
    isPreferredName?: boolean;
    isShortName?: boolean;
}