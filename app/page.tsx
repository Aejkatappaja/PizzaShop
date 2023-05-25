import { Pizza } from "./components/Pizza";
import { PizzaType } from "./types";

const pizzas = [
  {
    id: 1,
    name: "capricciosa",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/capricciosa.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 2,
    name: "cheesy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/cheesy.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 3,
    name: "hawaii",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/hawaii.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 4,
    name: "italian",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/italian.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 5,
    name: "margherita",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/margherita.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 6,
    name: "pepperoni",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/pepperoni.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 7,
    name: "quattro formaggi",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/quattro-formaggi.webp",
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 8,
    name: "quattro stagioni",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/quattro-stagioni.webp",
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 9,
    name: "tonno",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/tonno.webp",
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
  {
    id: 10,
    name: "vegetarian",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto libero provident quo molestias nesciunt numquam illum. In tenetur labore, provident libero quis deleniti harum esse quasi temporibus sapiente reprehenderit nostrum.",
    image: "/vegetarian.webp",
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        name: "cherry tomatoes",
        image: "/cherry.png",
        price: 2,
      },
      { name: "corn", image: "/corn.png", price: 2 },
      { name: "fresh tomatoes", image: "/fresh-tomatoes.png", price: 2 },
      { name: "jalapeno", image: "/jalapeno.png", price: 2 },
      { name: "parmesan", image: "/parmesan.png", price: 2 },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas.map((pizza: PizzaType) => {
            return <Pizza key={pizza.id.toString()} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
