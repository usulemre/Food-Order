import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// import useFetch from "../../hook/use-fetch";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  // const { sendRequest: mealsFetch } = useFetch();

  // const transFormData = (obj) => {
  //   let transform = [];
  //   for (const key in obj) {
  //     transform.push({
  //       id: key,
  //       name: obj[key].name,
  //       price: obj[key].price,
  //       description: obj[key].description,
  //     });
  //   }
  //   setMealsData(transform);
  // };

  // useEffect(() => {
  //   mealsFetch(
  //     "https://costom-hook-4700b-default-rtdb.firebaseio.com/meals.json",
  //     transFormData
  //   );
  // }, [mealsFetch]);

  useEffect(() => {
    const fetchG = async () => {
      const response = await fetch(
        "https://costom-hook-4700b-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      console.log(data);
      let transform = [];
      for (const key in data) {
        transform.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
        console.log(transform)
        setMealsData(transform);
      }
    };
    fetchG();
  }, []);

  const mealList = mealsData.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      id={meal.id}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
