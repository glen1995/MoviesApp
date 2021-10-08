import { VStack,Image, HStack, Center } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Detailedinfo = ({data}) => {
    console.log(data)
    return (
        <Center flex={1} >
      <VStack p={50}>
          <Center>
        <Text>{data.title ? data.title : data.original_name}</Text>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          }}
          alt={data.title ? data.title : data.original_name}
          size="lg"
        />
        <Text>{data.overview}</Text>
        <HStack>
          <Text>Popularity: {data.popularity}</Text>|<Text>Release date: {data.release_date}</Text>
        </HStack>
        </Center>
      </VStack>
      </Center>
    );
}

export default Detailedinfo

const styles = StyleSheet.create({})
