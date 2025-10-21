import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {

    getConfig()
    {
        return "Get all config"
    }

}
