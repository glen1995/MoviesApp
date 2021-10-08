import React from "react";
import {
  Select,
  VStack,
  CheckIcon,
  Center
} from "native-base";



export const SelectMovies = (props) => {
  let [service, setService] = React.useState("");
  return (
    <Center px={3} m={'1rem'}>

    <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilitydescribedby="tests"
        defaultValue="now_playing"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) =>{ 
        setService(itemValue);
        props.changed(itemValue)
        } }
      >
        <Select.Item label="now playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </VStack>

  </Center>

  );
};

export default SelectMovies