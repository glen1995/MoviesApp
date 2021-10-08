import { VStack,Image, HStack, Container,Center } from 'native-base'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { width } from 'styled-system';

const Detailedinfo = ({data}) => {
    return (
      <Container  style={styles.contain}>
      <VStack>
        <Center>
        <Text style={{fontWeight:'bold',fontSize:'1rem',paddingBottom:'1.5rem',paddingTop:'.5rem'}}>{data.title ? data.title : data.original_name}</Text></Center>
        <Center paddingBottom={'.5rem'}><Image style={{textAlign:'center'}}
          source={{
            uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
          }}
          alt={data.title ? data.title : data.original_name}
          size="2xl"
        /></Center>
        <Text style={styles.aligntoImage}>{data.overview}</Text>
        <HStack style={{maxWidth:'256px'}}>
          <Text>Popularity: {data.popularity}</Text>|<Text>Release date: {data.release_date}</Text>
        </HStack>
      </VStack>
      </Container>
    );
}

export default Detailedinfo

const styles = StyleSheet.create({
  'contain':{
marginLeft:'auto',
marginRight:'auto'
  },
  aligntoImage:{
    maxWidth:'256px',
    marginLeft:'auto',
    marginRight:'auto',
    paddingTop:'.5rem',
    paddingBottom:'1rem'
  }
})
