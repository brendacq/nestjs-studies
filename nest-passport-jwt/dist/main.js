"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const passport = require("passport");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'new secret',
        resave: false,
        saveUnitialized: false,
        cookie: { maxAge: 10000000 },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map