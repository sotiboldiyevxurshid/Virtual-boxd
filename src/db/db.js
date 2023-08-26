import pizzaImg from "../images/poto1.png";
import burgerImg from "../images/poto2.jpg";
import cocaImg from "../images/poto17.jpg";
import saladImg from "../images/poto15.jpg";
import waterImg from "../images/poto5.jpg";
import iceCreamImg from "../images/poto20.jpg";
import kebabImg from "../images/poto8.jpg";

export function getData() {
  return [
    { title: "Qoqon xolva", price: 50, Image: pizzaImg,id:1 },
    { title: "300$ holva", price: 60, Image: burgerImg,id:2 },
    { title: "300$ xolva new", price: 60 , Image: cocaImg ,id:3},
    { title: "G'ovrak", price: 60, Image: kebabImg,id:4 },
    { title: "Pashmak", price: 30 , Image: saladImg,id:5 },
    { title: "xolva Xolva", price: 30 , Image: waterImg,id:6 },
    { title: "Kazinaki", price: 60 , Image: iceCreamImg,id:7 },
  ];
}
