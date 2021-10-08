import { VStack, Box } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DataList from "../lists/DataList";
import apiRequest from "../service/api";
import SelectTv from "../UiComponents/SelectTv";

const Movie = (props) => {
  const type = "movie";
  const [select, setSelect] = useState("popular");
  const currentlySelected = (item) => {
    setSelect(item);
  };
  const results = apiRequest("tv", select);
  return (
    <View flex={1}>
      <SelectTv changed={currentlySelected} />
      {results.isLoading === false && results.response !== null ? (
        <DataList data={results.response.results} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  DataList: {},
});
