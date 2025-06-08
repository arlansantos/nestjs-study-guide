import { Controller, Get, HttpCode, Param, Post, Query, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller('cats')
export class CatsController{

  @Post()
  create(): string {
    return "Cat created successfully!";
  }

  @Post('create-without-return')
  @HttpCode(204)
  createWithoutReturn(): void {
    console.log("Cat created without return value");
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 302)
  redirect(){
  }
  
  @Get('redirect-two')
  @Redirect('https://nestjs.com', 302)
  redirectTwo(@Query('otherUrl') otherUrl: string) {
    console.log('Redirecting to:', otherUrl);
    if (otherUrl) {
      return { url: otherUrl, statusCode: 302 };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Cat with ID ${id} found!`;
  }

  @Get()
  getCats(){
    return "List of cats completed!"; 
  }
}