import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base";

export const SelectTv = ({ changed }) => {
  let [service, setService] = React.useState("");
  return (
    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        defaultValue="now_playing"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setService(itemValue);
          changed(itemValue);
        }}
      >
        <Select.Item label="airing today" value="airing_today" />
        <Select.Item label="on the air" value="on_the_air" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
      </Select>
    </VStack>
  );
};

export default SelectTv;
