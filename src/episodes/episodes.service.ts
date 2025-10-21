import { Injectable } from '@nestjs/common';
import { Episode } from './entity/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { randomUUID  } from 'crypto';

@Injectable()
export class EpisodesService {

    private episodes: Episode[]=[];

    async findAll(sort: 'asc'|'desc'='asc'){
        return this.episodes.sort((a:Episode,b:Episode)=>{
            if(sort==='asc')
            {
                return a.name>b.name?1:-1;
            }
            return a.name>b.name?-1:1;

        });

    }

    async createEpisode(episode: CreateEpisodeDto){
        const episodeObj={...episode, id: randomUUID()};
        this.episodes.push(episodeObj);
        return episodeObj;

    }

    async findOne(id:string){
        return this.episodes.find((episode:Episode)=> episode.id===id);
    }

    async findFeatured(){
        return this.episodes.filter((episode:Episode)=> episode?.featured);
    }

    async deleteEpisode(id:string){
        this.episodes= this.episodes.filter((episode)=> episode.id!==id);
        return `episode ${id} deleted`;
    }

    async updateEpisode(id:string, episode:Episode){
        this.episodes = this.episodes.map((ep: Episode)=>{
           return ep.id===id ? {...episode, id:id}: ep
        });

        return this.episodes;
    }


}
