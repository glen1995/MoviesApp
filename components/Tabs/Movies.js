
import {VStack,Box} from 'native-base'


import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DataList from '../lists/List'
import apiRequest from '../service/api'
import { SelectMovies } from '../UiComponents/SelectMovies'

export const Movies = (props) => {
    const type='movie'
    const [select,setSelect]=useState('now_playing')
    const currentlySelected=(data)=>{
        setSelect(data)
    }
    const results=apiRequest(type,select)
      return (

        <Box p={'.5rem'} flex={1} style={{}}>

        <VStack style={{flex:1, width:"80%"}}>
          <SelectMovies changed={currentlySelected} />
          {results && !results.loading && results.response !== null ? (
            <View style={{flex:1, width:"100%", textAlign: "center"}}>
              <DataList type={type} data={results.response} />
            </View>
          ) : (
            ""
          )}
        </VStack>

        </Box>

      );
}

// export default FirstRoute;

const styles = StyleSheet.create({})
