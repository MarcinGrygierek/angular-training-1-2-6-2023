export interface PokemonItem {
    item: {
        name: string;
    }
}

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    held_items: PokemonItem[];
}