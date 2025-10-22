import { IsString, IsBoolean, IsNotEmpty, IsDate } from "class-validator"
import { Type } from "class-transformer"

export class CreateEpisodeDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    featured?: boolean;

    @IsDate()
    @Type(()=>Date)
    date:Date;
}
