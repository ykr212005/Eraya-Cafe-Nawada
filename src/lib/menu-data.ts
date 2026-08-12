import chilliPaneer from "@/assets/dish-chilli-paneer.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import coffee from "@/assets/dish-coffee.jpg";

export type Signature = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  alt: string;
};

export const signatures: Signature[] = [
  {
    name: "Chilli Paneer Dry",
    category: "Starters",
    description:
      "Wok-tossed cottage cheese with peppers, spring onion and our house chilli glaze — the plate that starts most tables.",
    price: "₹240",
    image: chilliPaneer,
    alt: "Chilli paneer starter tossed with peppers on a ceramic plate",
  },
  {
    name: "Eraya Farmhouse Pizza",
    category: "Main Course",
    description:
      "Hand-stretched base, slow-cooked tomato, garden vegetables and a generous blanket of cheese, baked to a blistered edge.",
    price: "₹329",
    image: pizza,
    alt: "Freshly baked farmhouse pizza on a wooden board",
  },
  {
    name: "Delhi Papdi Chaat",
    category: "Chaat",
    description:
      "Crisp papdi, whipped curd, tamarind and mint, pomegranate and sev — the flavour of the neighbourhood, plated properly.",
    price: "₹160",
    image: chaat,
    alt: "Papdi chaat with curd, chutneys and pomegranate in a ceramic bowl",
  },
  {
    name: "Molten Chocolate Cake",
    category: "Desserts",
    description:
      "Warm dark chocolate centre, vanilla ice cream and berry coulis. Ordered last, remembered longest.",
    price: "₹210",
    image: dessert,
    alt: "Molten chocolate lava cake with ice cream and berry coulis",
  },
  {
    name: "Hazelnut Cold Coffee",
    category: "Beverages",
    description:
      "Double-shot cold coffee blended thick with hazelnut and cocoa dust — our most repeated order of the afternoon.",
    price: "₹190",
    image: coffee,
    alt: "Tall hazelnut cold coffee beside a cappuccino on a wooden table",
  },
];

export type MenuCategory =
  | "Chinese"
  | "Continental"
  | "Indian & Chaat"
  | "Beverages"
  | "Desserts"
  | "Healthy";

export const menuCategories: MenuCategory[] = [
  "Chinese",
  "Continental",
  "Indian & Chaat",
  "Beverages",
  "Desserts",
  "Healthy",
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  veg: boolean;
  featured?: boolean;
};

export const menu: MenuItem[] = [
  {
    name: "Chilli Paneer Dry",
    description: "Peppers, spring onion, house chilli glaze",
    price: "₹240",
    category: "Chinese",
    veg: true,
    featured: true,
  },
  {
    name: "Hakka Noodles",
    description: "Wok noodles with julienned garden vegetables",
    price: "₹210",
    category: "Chinese",
    veg: true,
    featured: true,
  },
  {
    name: "Chicken Manchurian",
    description: "Crisp chicken in a glossy garlic-ginger gravy",
    price: "₹290",
    category: "Chinese",
    veg: false,
  },
  {
    name: "Veg Momos (Steamed / Fried)",
    description: "Eight pieces, served with fiery red chutney",
    price: "₹150",
    category: "Chinese",
    veg: true,
  },
  {
    name: "Eraya Farmhouse Pizza",
    description: "Hand-stretched base, garden vegetables, mozzarella",
    price: "₹329",
    category: "Continental",
    veg: true,
    featured: true,
  },
  {
    name: "Penne Alfredo",
    description: "Slow-stirred white sauce, herbs, parmesan dust",
    price: "₹280",
    category: "Continental",
    veg: true,
  },
  {
    name: "Cheese Loaded Fries",
    description: "Skin-on fries, cheddar sauce, jalapeño, herbs",
    price: "₹190",
    category: "Continental",
    veg: true,
    featured: true,
  },
  {
    name: "Grilled Chicken Sandwich",
    description: "Sourdough, herbed mayo, greens, chargrilled chicken",
    price: "₹260",
    category: "Continental",
    veg: false,
  },
  {
    name: "Delhi Papdi Chaat",
    description: "Curd, tamarind, mint, pomegranate, sev",
    price: "₹160",
    category: "Indian & Chaat",
    veg: true,
    featured: true,
  },
  {
    name: "Aloo Tikki Chaat",
    description: "Griddled potato tikki, chutneys, crisp sev",
    price: "₹150",
    category: "Indian & Chaat",
    veg: true,
  },
  {
    name: "Paneer Butter Masala with Butter Naan",
    description: "Tomato-cashew gravy, soft naan, salad",
    price: "₹320",
    category: "Indian & Chaat",
    veg: true,
  },
  {
    name: "Dahi Bhalla",
    description: "Soft bhalla, sweet curd, pomegranate",
    price: "₹140",
    category: "Indian & Chaat",
    veg: true,
  },
  {
    name: "Hazelnut Cold Coffee",
    description: "Double shot, hazelnut, cocoa dust",
    price: "₹190",
    category: "Beverages",
    veg: true,
    featured: true,
  },
  {
    name: "Cappuccino",
    description: "Single-origin espresso, silk-textured milk",
    price: "₹150",
    category: "Beverages",
    veg: true,
  },
  {
    name: "Masala Chai",
    description: "Slow-brewed with ginger, cardamom and love",
    price: "₹90",
    category: "Beverages",
    veg: true,
  },
  {
    name: "Fresh Lime Cooler",
    description: "Lime, mint, soda or water — your call",
    price: "₹110",
    category: "Beverages",
    veg: true,
  },
  {
    name: "Molten Chocolate Cake",
    description: "Warm centre, vanilla ice cream, berry coulis",
    price: "₹210",
    category: "Desserts",
    veg: true,
    featured: true,
  },
  {
    name: "New York Cheesecake",
    description: "Baked slice with seasonal berry compote",
    price: "₹230",
    category: "Desserts",
    veg: true,
  },
  {
    name: "Brownie with Ice Cream",
    description: "Fudge brownie, vanilla scoop, chocolate sauce",
    price: "₹200",
    category: "Desserts",
    veg: true,
  },
  {
    name: "Grilled Veg & Hummus Bowl",
    description: "Chargrilled vegetables, hummus, olive oil, seeds",
    price: "₹270",
    category: "Healthy",
    veg: true,
    featured: true,
  },
  {
    name: "Garden Greek Salad",
    description: "Cucumber, olives, feta, lemon-oregano dressing",
    price: "₹240",
    category: "Healthy",
    veg: true,
  },
  {
    name: "Oats & Fruit Smoothie Bowl",
    description: "Banana, seasonal fruit, granola, honey",
    price: "₹220",
    category: "Healthy",
    veg: true,
  },
];
