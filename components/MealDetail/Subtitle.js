import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
