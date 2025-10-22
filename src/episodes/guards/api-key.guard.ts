
import {Injectable, CanActivate, ExecutionContext} from "@nestjs/common"

@Injectable()
export class ApiKeyGuard implements CanActivate{

    canActivate(context:ExecutionContext){

        const req = context.switchToHttp().getRequest();
        const apiKey = req.headers['x-api-key'];

        if(apiKey!=="nest-is-awesome"){
            return false;
        }


        return true;
    }

}