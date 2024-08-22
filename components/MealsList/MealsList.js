import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({ meals }) {
  function renderMealItem(itemData) {
    const { item } = itemData;
    return <MealItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
