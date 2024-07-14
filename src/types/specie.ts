export interface specie {
    name: string;
    url: string;
}

export interface specieInfo {
    name: string;
    types: string[];
    imageUrl: string;
}

export interface speciesByTypes {
    [types: string]: specieInfo[];
}
