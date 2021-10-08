 import React from 'react'
 import { StyleSheet, Text, View } from 'react-native'
 import Detailedinfo from '../layouts/Detailedinfo'
import detailsRequest from '../service/detailsapi'
 const DetailsContainer = (props) => {
     const results=detailsRequest(props.props.route.params.type,props.props.route.params.id)
     return (
         <>
{
    !results.isLoading&&(results.response!==null)?<Detailedinfo data={results.response}/>:""
}
         </>
     )
 }
 
 export default DetailsContainer
 
 const styles = StyleSheet.create({})
 