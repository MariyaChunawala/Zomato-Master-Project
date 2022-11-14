import JwtPassport from 'passport-jwt';

import { UserModel } from '../Database/allModels';

const JwtStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoAPP",
}

export default (passport) => {
    passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
        try {
            const doesUserExist = await UserModel.findById(jwt_payload.user);
            if (!doesUserExist) {
                return done(null, false);
            }
            return done(null, doesUserExist);
        } catch (error) {
            throw new Error(error);
        }
    }))
}