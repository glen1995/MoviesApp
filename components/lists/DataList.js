import React from "react";
import { useNavigation,useRoute} from "@react-navigation/native";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import ListItem from "../listitems/ListItem";



const DataList = ({ data }) => {
  const navigation=useNavigation()
  const route=useRoute()
  const renderItem = ({ item }) => <ListItem items={item} nav={navigation} rout={route}/>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default DataList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});