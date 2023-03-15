import React from 'react';
import './App.css';
import Button from "./components/Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import our_story from "./assets/our_story.png"

import Product from "./components/Product";
import Tile from "./components/Tile";

function App() {


  return (
    <>

      <h1>Handbags & Purses</h1>

    <nav>

        <Button Disabled={false} clickHandler={() => console.log("To the collection!")}>
            To the collection
        </Button>
        <Button Disabled={false} clickHandler={() => console.log("Shop all bags!")}>
            Shop all bags
        </Button>
        <Button Disabled={true} clickHandler={() => console.log("To the pre-orders!")}>
            Pre-orders
        </Button>

    </nav>

        <main>

            <Product
               label="Best seller"
               image={bag1}
               name="the handy bag"
               price="euro 428" />

            <Product
                label="Best seller"
                image={bag2}
                name="the stylish bag"
                price="euro 780" />


            <Product
                label="Best seller"
                image={bag3}
                name="the simple bag"
                price="euro 462" />


            <Product
                label="Best seller"
                image={bag4}
                name="the trendy bag"
                price="euro 252" />

        </main>

        <footer>
            <Tile title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
            </Tile>
            <Tile img={brand} imgDescription="The brand logo" />
            <Tile img={our_story} imgDescription="The designers" />
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
            </Tile>
        </footer>

    </>
  );
}

export default App;



