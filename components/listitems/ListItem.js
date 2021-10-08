import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Box, Button, Image} from "native-base";

const ListItem = ({ items,nav,rout}) => {
  let title;
  
  (items.title)?title=items.title:title=items.original_name;
  let release;
  (items.release_date)?release=items.release_date:release=items.first_air_date
  return (
    <View flex={1} style={{ width: "100%" }}>
      <View>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${items.poster_path}`,
          }}
          alt="Alternate Text"
          size="xl"
        />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>Popularity {items.popularity}</Text>
        <Text>Release Date {release}</Text>
        <Button
          onPress={() =>
            nav.navigate("Details", {
              label: title,
              id:items.id,
              type: items.title?"movie":"tv",
            })
          }
        >
          more details
        </Button>
      </View>
    </View>
  );
};

export default ListItem;
const styles = StyleSheet.create({});