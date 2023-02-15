import { Router } from 'express';
import passport from "passport";
import { authController } from "../controllers/index.js";
import generateFaker from '../faker.js';

const router = Router()

router
    .route('/login')
    .get(authController.getLogin)
    .post(
        passport.authenticate("login", { failureRedirect: "/fail-login" }),
        authController.getLogin
    );

router
    .route("/register")
    .get(authController.getRegister)
    .post(
        passport.authenticate("register", { failureRedirect: "/fail-register" }),
        authController.getLogin
    );

router.get("/fail-login", authController.getLoginFailiure);
router.get("/fail-register", authController.getRegisterFailiure);

router.get("/logout", authController.logOut);

router.get('/login/productos', (req, res) => {
    const { username } = req.body;
    console.log(username)
    if (!username){ res.redirect('/login')}
    return res.render('form', { username })
})

router.route('/api/productos-test').get((req, res) => {
    res.render('test', { items: generateFaker() })
})

export default router;