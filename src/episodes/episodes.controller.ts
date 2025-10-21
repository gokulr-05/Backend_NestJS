import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {

    @Get()
    getAllEpisodes(){
        return "All Episodes";
    }

    @Get('featured')
    featuredEpisodes(){
        return "Featured Episodes";
    }


    @Post()
    createEpisode(){
        return "Create Episode";
    }

}
