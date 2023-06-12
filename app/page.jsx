import Feed from '@components/Feed';
import { Nav } from '@components/Nav';

const isUserLoggedIn = false;

const Home = () => {
  return(

    <div>
      <Nav />
    {isUserLoggedIn ? (<div>
      <a href='/' className='share_recipeBtn'>Recipe</a>
      <Feed />
      </div>
    ): (
      <div>
      <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Delicious Recipes</span>
      </h1>
      <p className='desc text-center'>
        CookItUp is a modern recipe sharing and discovering portal specially designed for you
      </p>
      <p className='desc text-center'>
          
Unleash your culinary creativity with our recipe sharing web app.
Share, Discover, and Savor the flavors of a global food community.
From kitchen to kitchen, our app brings joy to every dish.
Cook, Connect, and Create delicious memories.
Embrace the art of cooking with our recipe hub. Bon appétit!
        </p>
        </section>
      </div>
    )}
    </div>
    
  
);
  }

export default Home;