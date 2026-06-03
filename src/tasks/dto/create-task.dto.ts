import { IsString, IsOptional, IsBoolean, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Mettre à jour la documentation' })
  @IsString()
  @MinLength(1, { message: 'Le titre ne peut pas être vide' })
  title: string;

  @ApiPropertyOptional({ example: 'Ajouter les exemples curl dans le README' })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
