import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";
export const SelectTv = (props) => {
  let [service, setService] = React.useState("");
  return (
    <Center m={'1rem'}>


    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        defaultValue="popular"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setService(itemValue);
          props.changed(itemValue);
        }}
      >
        <Select.Item label="airing today" value="airing_today" />
        <Select.Item label="on the air" value="on_the_air" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
      </Select>
    </VStack>
  </Center>

  );
};

export default SelectTv;
