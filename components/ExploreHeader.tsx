import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import GlobalStyles from "./GlobalStyles";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"}>Booking</Link>
          <TouchableOpacity>
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>zxczxczxczxc</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    height: 130,
    color: "red",
  },
  actionRow: {
    flexDirection: "row",
  },
});

export default ExploreHeader;
