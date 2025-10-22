import { Controller, Get, Param, Post, Body, Query, ParseIntPipe, DefaultValuePipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { EpisodesService } from "./episodes.service";
import {ConfigService} from "../config/config.service";
import {IsPositivePipe} from "./pipes/is-positive.pipe";
import {ApiKeyGuard} from "./guards/api-key.guard"

@UseGuards(ApiKeyGuard)
@Controller('episodes')
export class EpisodesController {

    constructor(private readonly EpisodesService:EpisodesService, private readonly configService:ConfigService){}


    @Get()
    // the defaultvalue pipe should be the written first
    getAllEpisodes(@Query('sort') sort: 'asc'| 'desc'= 'asc', @Query('limit', new DefaultValuePipe(10), ParseIntPipe, new IsPositivePipe()) limit: number=10){
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
