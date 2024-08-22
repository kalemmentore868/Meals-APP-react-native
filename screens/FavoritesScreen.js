import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainwe}>
        <Text style={styles.text}>You Have no favorites yet</Text>
      </View>
    );
  }

  return <MealsList meals={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainwe: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
