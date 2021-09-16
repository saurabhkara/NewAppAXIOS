//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height}=Dimensions.get('window');

// create a component
const NewsCard = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source={{uri:item.urlToImage}}/>
            <Text style={styles.desc}>{item.description}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
     borderRadius:20,
     backgroundColor:'white',
     elevation:1,
     margin:5,
    
    }, 
    title:{
        width:width,
        padding:width*0.05,
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'left'
        
    },
    desc:{
       
        marginBottom:width*0.1,
        color:'gray',
        fontSize:16,
        marginHorizontal:width*0.05
        

    },
    image:{
        height:height/12,
        resizeMode:'contain',
        marginHorizontal:width*0.05,
        marginVertical:width*0.05,
        
    },
    author:{
        marginBottom:10,
        marginHorizontal:width*0.05,
        fontSize:15,
        color:'lightgray',
        fontWeight:'bold',
        textAlign:'left'
    }
});

//make this component available to the app
export default NewsCard;
