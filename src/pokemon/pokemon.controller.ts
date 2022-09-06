import * as NestJs from '@nestjs/common';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonService } from './pokemon.service';

@NestJs.Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @NestJs.Post()
  create(@NestJs.Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @NestJs.Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @NestJs.Get(':id')
  findOne(@NestJs.Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @NestJs.Patch(':id')
  update(
    @NestJs.Param('id') id: string,
    @NestJs.Body() updatePokemonDto: UpdatePokemonDto,
  ) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @NestJs.Delete(':id')
  remove(@NestJs.Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}
