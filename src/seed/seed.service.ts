import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interfaces/pokemonResponse.interface';
@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    data.results.forEach((poke) => {
      const segments = poke.url.split('/');
      const no: number = +segments[segments.length - 2];
      console.log(no, poke.name);
    });

    return data.results;
  }
}
