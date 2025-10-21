import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { EpisodesService } from "./episodes.service"
import {ConfigService} from "../config/config.service"

@Controller('episodes')
export class EpisodesController {

    constructor(private readonly EpisodesService:EpisodesService, private readonly configService:ConfigService){}


    @Get()
    getAllEpisodes(@Query('sort') sort: 'asc'| 'desc'= 'asc'){
        return this.EpisodesService.findAll(sort);
    }

    @Get("config")
    getConfig(){
        return this.configService.getConfig();
    }

    // Important:  this method should always written before the @Get(":id")
    @Get('featured')
    featuredEpisodes(){
        return this.EpisodesService.findFeatured();
    }

    @Get(":id")
    getEpisodeByID(@Param('id') id: string){
        return this.EpisodesService.findOne(id);
    }




    @Post()
    createEpisode(@Body() createEpisodeDto: CreateEpisodeDto){
        return this.EpisodesService.createEpisode(createEpisodeDto);
    }

}
