import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useFetch from "../../hook/use-fetch";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { error, loading, sendRequest: mealsFetch } = useFetch();

  const transFormData = (obj) => {
    let transform = [];
    for (const key in obj) {
      transform.push({
        id: key,
        name: obj[key].name,
        price: obj[key].price,
        description: obj[key].description,
      });
    }
    setMealsData(transform);
  };

  useEffect(() => {
    mealsFetch(
      {
        url: "https://costom-hook-4700b-default-rtdb.firebaseio.com/meals.json",
      },
      transFormData
    );
  }, []);

  // useEffect(() => {
  //   const fetchG = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       const response = await fetch(
  //         "https://costom-hook-4700b-default-rtdb.firebaseio.com/meals.json"
  //       );
  //       if (!response.ok) {
  //         throw new Error("Sunucu hatası!...");
  //       }
  //       const data = await response.json();
  //       console.log(data);
  //       let transform = [];
  //       for (const key in data) {
  //         transform.push({
  //           id: key,
  //           description: data[key].description,
  //           name: data[key].name,
  //           price: data[key].price,
  //         });
  //         console.log(transform);
  //         setMealsData(transform);
  //       }
  //     } catch (error) {
  //       setError(error.message || "Hata!....");
  //     }
  //     setLoading(false);
  //   };
  //   fetchG();
  // }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading.....</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading">
        <h2>{error}</h2>
      </div>
    );
  }

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
