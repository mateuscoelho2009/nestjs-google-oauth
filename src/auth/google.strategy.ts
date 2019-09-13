import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google')
{
    
    constructor()
    {
        super({
            // Use Env vars here
            clientID    : '240358397727-u4sa0uva06pj68d736iva0e4c4eplmi9.apps.googleusercontent.com',     // <- Replace this with your client id
            clientSecret: 'ZN7Wj3E6D-1upoem65nN0dOA', // <- Replace this with your client secret
            callbackURL : 'http://localhost:3001/auth/google/callback',
            passReqToCallback: true,
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        })
    }


    async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
    {
        try
        {
            console.log(profile);

            const jwt: string = 'placeholderJWT'
            const user = 
            {
                jwt
            }

            done(null, user);
        }
        catch(err)
        {
            // console.log(err)
            done(err, false);
        }
    }

}