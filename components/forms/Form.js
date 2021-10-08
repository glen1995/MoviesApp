import React, { useState } from "react";
import { Button, FormControl, HStack, Icon, Input, VStack,Box, Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SelectSearch from '../UiComponents/SelectSearch'
const Form = (props) => {
const [formData, setData] = useState({});
let item={'item':'multi'}
const onItemchanged=(data)=>{
item['item']=[data]
}
  return (
    <Container mx={"auto"}>
      <VStack space={2} width="100%" py={5}>
        <Box>
          <FormControl isRequired>
            <FormControl.Label fontSize="sm">
              Search Movie/Tv Show name
            </FormControl.Label>
            <Box>
              <Input
                isRequired
                style={{ width: "100%" }}
                placeholder="i.e James bond,CSI"
                InputLeftElement={
                  <Icon
                    size={5}
                    ml={2}
                    color="gray.400"
                    as={<Ionicons name="ios-search" />}
                  />
                }
                onChangeText={(value) => {
                  setData({ ...formData, name: value });
                }}
              />
            </Box>
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired>
            <FormControl.Label fontSize="sm">
              Choose Search type
            </FormControl.Label>
            <HStack width="100%" space={2}>
              <SelectSearch changed={onItemchanged} />
              <Button
                px={1}
                py={0}
                onPress={() => props.formSubmit(formData, item)}
                startIcon={<Icon as={Ionicons} name="ios-search" />}
              >
                Search
              </Button>
            </HStack>
            <FormControl.HelperText>
              please select search type
            </FormControl.HelperText>
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Form;
