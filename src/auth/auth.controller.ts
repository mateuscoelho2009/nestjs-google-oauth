import { Controller, Get, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin()
    {
        // initiates the Google OAuth2 login flow
    }

    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req, @Res() res)
    {
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        console.log(jwt);

        if (jwt)
            res.redirect('http://localhost:3000/' + jwt);
        else 
            res.redirect('http://localhost:3000/login/failure');
    }

    @Get('protected')
    @UseGuards(AuthGuard('jwt'))
    protectedResource()
    {
        return 'JWT is working!';
    }

}