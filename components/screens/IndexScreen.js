
import { Container } from 'native-base'
import { StyleSheet, Text, View } from 'react-native'
import TabViewer from '../layouts/Tabview';
import React from 'react';
const IndexScreen = (props) => {
    return(
       <TabViewer props={props}/>
    )
   
}

export default IndexScreen

const styles = StyleSheet.create({})