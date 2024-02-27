import { Router} from 'express';
import * as HomeController from  '../controllers/pageController';
import * as searchController from  '../controllers/searchController';
const router = Router();

router.get('/', HomeController.home);
router.get('/dogs', HomeController.dogs);
router.get('/cats', HomeController.cats);
router.get('/fish', HomeController.fish);

router.get('/search', searchController.search);


export default router;