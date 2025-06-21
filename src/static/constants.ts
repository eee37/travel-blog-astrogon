// major regions - destinations > nav bar
export enum MajorRegion {
    // AFRICA = "Africa",
    // ASIA = "Asia",
    CARRIBEAN = "Carribean",
    // CENTRAL_AMERICA = "Central America",
    EUROPE = "Europe",
    NORTH_AMERICA = "North America",
    LATIN_AMERICA = "Latin America"
    // SOUTH_AMERICA = "South America"
};

// sub regions of major regions

enum EuropeRegions {
    MEDITERRANEAN = "Mediterranean"
} 

enum LatinAmericaRegions {
    ANDES = "Andes",
    CENTRAL_AMERICA = "Central America",
    SOUTH_AMERICA = "South America"

}

export const SubRegions = {
    ...EuropeRegions,
    ...LatinAmericaRegions
} as const;

export type SubRegionType = typeof SubRegions[keyof typeof SubRegions];

// Countries
export enum Countries {
    CANADA = 'Canada',
    ECUADOR = 'Ecuador',
    ITALY = 'Italy',
    MEXICO = 'Mexico',
    PERU = 'Peru',
    SPAIN = 'Spain'
}