import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
export const SelectMovies = (props) => {
  let [service, setService] = React.useState("");
  return (

    <Center >

    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        defaultValue="multi"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setService(itemValue);
          props.changed(itemValue)
        }}
      >
        <Select.Item label="movie" value="movie" />
        <Select.Item label="multi" value="multi" />
        <Select.Item label="tv" value="tv" />
      </Select>
    </VStack>

  </Center>

  );
};

export default SelectMovies;
