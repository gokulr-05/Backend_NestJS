import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {

    @Get()
    getAllEpisodes(){
        return "All Episodes";
    }

    @Get(":id")
    getEpisodeByID(@Param('id') id: string){
        return `Episode ${id}`;
    }

    @Get('featured')
    featuredEpisodes(){
        return "Featured Episodes";
    }


    @Post()
    createEpisode(@Body() createEpisodeDto: CreateEpisodeDto){
        return createEpisodeDto;
    }

}
