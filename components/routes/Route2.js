import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Center, VStack } from "native-base";
import Form from "../forms/Form";
import { APP_KEY } from "../config/api_config";
import DataList from "../lists/DataList";
import { fontWeight } from "styled-system";

const Route2 = () => {
  const [result, setResult] = useState({});
  const [status, setStatus] = useState(false);
  const formSubmit = (data, item) => {
    fetch(
      `https://api.themoviedb.org/3/search/${item.item}?api_key=${APP_KEY}&query=${data.name}&language=en-US&page=1&include_adult=false`
    )
      .then((r) => r.json())
      .then((p) => {
        setResult(p);
        setStatus(true);
      })
      .catch((e) => console.log(e));
  };
  return (
    <VStack style={{ flex: 1 }}>
      <Form formSubmit={formSubmit} />
      {!status ? (
        <Center flex={1}>
          <Text style={{ fontWeight: "bold" }}>Please Initiate a Search</Text>
        </Center>
      ) : (
        <DataList data={result} />
      )}
    </VStack>
  );
};

export default Route2;

const styles = StyleSheet.create({});
