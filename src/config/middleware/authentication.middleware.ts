/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request } from 'express-serve-static-core';
import { request, response, Response } from 'express';
import { async } from 'rxjs';
import { JwtTokenService } from '../providers/jwtService.service';
import { UserService } from 'src/module/user/user.service';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  
  private loggerService:Logger;
  private jwtToken: JwtTokenService;
  private userService: UserService;

  use(req: Request, res: Response, next: Function) :void{
    
    const {ip,method,originalUrl} = request;;
    const userAgent  = request.get('user-agent') || '';
    
    response.on('finish',()=>{
      const {statusCode} =  response;
      const contentLength = response.get('content-Length');

      this.loggerService.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent}  ${ip}`
      );
    // const result = this.jwtToken.verifyToken(cookie);
    });
    
    next();
  }  

}


