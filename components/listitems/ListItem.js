import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, Button, HStack, Image, VStack, Center } from "native-base";

const ListItem = ({ items }) => {
  console.log(items);
  return (
    <VStack flex={1} style={{ width: "100%" }}>
      <Text>{items.title}</Text>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${items.poster_path}`,
        }}
        alt="Alternate Text"
        size="xl"
      />
    </VStack>
  );
};

export default ListItem;
const styles = StyleSheet.create({});
