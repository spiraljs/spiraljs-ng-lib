export class GeoIP2Location {
    CityId: string = null;
    CityGNId: number = null;
    CityName: string = null;
    ContinentGNId: number = null;
    ContinentCode: string = null;
    ContinentName: string = null;
    CountryGNId: number = null;
    CountryISOCode: string = null;
    CountryName: string = null;
    PhoneCode: number = 0;
    AccuracyRadius: number = null;
    Latitude: number = null;
    Longitude: number = null;
    MetroCode: number = null;
    TimeZone: string = null;
    PostalCode: string = null;
    StateId: string = null;
    StateGNId: number = null;
    StateISOCode: string = null;
    StateName: string = null;
    AutonomousSystemNumber: number = null;
    AutonomousSystemOrganization: string = null;
    ISP: string = null;
    Organization: string = null;
    IPAddress: string = null;

    assignCity(city) {
        if (city) {
            this.CityGNId = city.geoname_id;
            this.CityName = city.names.en;
        }
    }

    assignContinent(continent) {
        if (continent) {
            this.ContinentCode = continent.code;
            this.ContinentGNId = continent.geoname_id;
            this.ContinentName = continent.names.en;
        }
    }

    assignCountry(country) {
        if (country) {
            this.CountryISOCode = country.iso_code;
            this.CountryGNId = country.geoname_id;
            this.CountryName = country.names.en;
            this.getPhoneCode();
        }
    }

    assignLocation(location) {
        if (location) {
            this.AccuracyRadius = location.accuracy_radius;
            this.Latitude = location.latitude;
            this.Longitude = location.longitude;
            this.MetroCode = location.metro_code;
            this.TimeZone = location.time_zone;
        }
    }

    assignPostal(postal) {
        if (postal) {
            this.PostalCode = postal.code;
        }
    }

    assignSubDivision(subdivisions) {
        if (subdivisions) {
            if (subdivisions.length > 0) {
                var subd = subdivisions[0];
                if (subd) {
                    this.StateISOCode = subd.iso_code;
                    this.StateId = this.CountryISOCode + "-" + this.StateISOCode;
                    this.StateGNId = subd.geoname_id;
                    this.StateName = subd.names.en;
                }
            }
        }
    }

    assignTraits(traits) {
        if (traits) {
            this.AutonomousSystemNumber = traits.autonomous_system_number;
            this.AutonomousSystemOrganization = traits.autonomous_system_organization;
            this.ISP = traits.isp;
            this.Organization = traits.organization;
            this.IPAddress = traits.ip_address;
        }
    }

    prepareCityId() {
        var cityId: string = null;
        var cityNameUC: string = null;
        if (this.CityName) {
            cityNameUC = this.CityName.toUpperCase().trim();
            cityNameUC = cityNameUC.replace(" ", "_");
            if (this.CountryISOCode) {
                cityId = this.CountryISOCode;
                if (this.StateISOCode) {
                    cityId = cityId + "-" + this.StateISOCode;
                    cityId = cityId + "-" + cityNameUC;
                }
            }
        }
        this.CityId = cityId;
    }

    getPhoneCode() {
        switch (this.CountryISOCode) {
            case "US":
                this.PhoneCode = 1;
                break;
            case "IN":
                this.PhoneCode = 91;
                break;
            case "AE":
                this.PhoneCode = 971;
                break;
            default:
                this.PhoneCode = null;
                break;
        }
    }

    toString() {
        return this.CityName;
    }

}


/*  Result from GeoIP2 API
{
    "city": {
        "geoname_id": 5368361,
        "names": {
            "fr": "Los Angeles",
            "ja": "ロサンゼルス",
            "pt-BR": "Los Angeles",
            "ru": "Лос-Анджелес",
            "zh-CN": "洛杉矶",
            "de": "Los Angeles",
            "en": "Los Angeles",
            "es": "Los Ángeles"
        }
    },
    "continent": {
        "code": "NA",
        "geoname_id": 6255149,
        "names": {
            "en": "North America",
            "es": "Norteamérica",
            "fr": "Amérique du Nord",
            "ja": "北アメリカ",
            "pt-BR": "América do Norte",
            "ru": "Северная Америка",
            "zh-CN": "北美洲",
            "de": "Nordamerika"
        }
    },
    "country": {
        "iso_code": "US",
        "geoname_id": 6252001,
        "names": {
            "pt-BR": "Estados Unidos",
            "ru": "США",
            "zh-CN": "美国",
            "de": "USA",
            "en": "United States",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国"
        }
    },
    "location": {
        "accuracy_radius": 100,
        "latitude": 34.0522,
        "longitude": -118.2437,
        "metro_code": 803,
        "time_zone": "America/Los_Angeles"
    },
    "postal": {
        "code": "90091"
    },
    "registered_country": {
        "iso_code": "US",
        "geoname_id": 6252001,
        "names": {
            "zh-CN": "美国",
            "de": "USA",
            "en": "United States",
            "es": "Estados Unidos",
            "fr": "États-Unis",
            "ja": "アメリカ合衆国",
            "pt-BR": "Estados Unidos",
            "ru": "США"
        }
    },
    "subdivisions": [
        {
            "iso_code": "CA",
            "geoname_id": 5332921,
            "names": {
                "de": "Kalifornien",
                "en": "California",
                "es": "California",
                "fr": "Californie",
                "ja": "カリフォルニア州",
                "pt-BR": "Califórnia",
                "ru": "Калифорния",
                "zh-CN": "加利福尼亚州"
            }
        }
    ],
    "traits": {
        "autonomous_system_number": 32665,
        "autonomous_system_organization": "Southern California Gas Company",
        "isp": "Southern California Gas Company",
        "organization": "Sempra Energy",
        "ip_address": "161.209.206.202"
    },
    "represented_country": {
        "names": {}
    }
}

*/