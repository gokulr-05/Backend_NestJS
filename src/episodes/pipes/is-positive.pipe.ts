import { PipeTransform, BadRequestException, Injectable, ArgumentMetadata} from "@nestjs/common"

@Injectable()
export class IsPositivePipe implements PipeTransform{
    transform(value: number) {

        if(value<0){
            throw new BadRequestException("value should be positive");
        }

        return value;
    
    }
}
