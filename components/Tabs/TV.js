import { Container, VStack,Box } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DataList from "../lists/List";
import apiRequest from "../service/api";
import { SelectTv } from "../UiComponents/SelectTv";

export const TV = () => {
  const type = "tv";
  const [select, setSelect] = useState("popular");
  const currentlySelected = (data) => {
    setSelect(data);
  };
  const results = apiRequest(type, select);

  return (
    <Box flex={1} p={'.5rem'}> 

    <VStack style={{ flex: 1 }}>
      <SelectTv changed={currentlySelected} />
      {results && !results.loading && results.response !== null ? (
        <DataList type={type} data={results.response} />
      ) : (
        ""
      )}
    </VStack>

    </Box>

  );
};

// export default FirstRoute;

const styles = StyleSheet.create({});
