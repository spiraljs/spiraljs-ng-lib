/*
CityId: "US-CA-LOS_ANGELES"
CityName: "Los Angeles"
CountryId: "US"
CountryName: "United States"
GeoLocationId: 16
PostalCode: "90091"
StateId: "US-CA"
stateName: "California"
*/

export class SpiralLocation {
    GeoLocationId: number = null;
    PostalCode: string = null;
    CityId: string = null;
    StateId: string = null;
    StateName: string = null;
    CountryId: string = null;
    CountryName: string = null;
    PhoneCode: number = null;

    toString() {
        return this.GeoLocationId;
    }
}
