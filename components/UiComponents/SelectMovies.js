import React from "react";
import {
  Select,
  VStack,
  CheckIcon,

} from "native-base";


export const SelectMovies = ({changed}) => {
  let [service, setService] = React.useState("");
  return (
    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        defaultValue='now_playing'
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          setService(itemValue)
          changed(itemValue)
        }}
      >
        <Select.Item label="now playing" value="now_playing" />
        <Select.Item label="top rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
        <Select.Item label="popular" value="popular" />
      </Select>
    </VStack>
  );
};

export default SelectMovies