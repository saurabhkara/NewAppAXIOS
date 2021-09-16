//import liraries
import React, {useEffect,useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NewsCard from '../component/NewsCard';
import newsAPI from '../apis/News'

// create a component
const News = ({navigation}) => {

    const[news, setNews]=useState([])

    useEffect(()=>{
        // newsResponse()
        newsFromApI()
    },[])

    // const newsResponse= async()=>{
    //     const response= await newsAPI.get('top-headlines?country=us&apiKey=1ab37549de57441e88b0b6bab489d36e');
    //     console.log(response.data.articles[0])
    // }


    function newsFromApI(){
        newsAPI.get('top-headlines?country=us&apiKey=1ab37549de57441e88b0b6bab489d36e')
        .then((response)=>{
            setNews(response.data)
        
        })
        .catch((err)=>console.log(err))

        console.log(news)
    }

    if(!news){
        return null;
    }

    return (
        
            <FlatList 
                keyExtractor={(key, index)=>'key'+index}
                data={news.articles}
                renderItem={({item})=> {
                    return (<NewsCard item={item} />)
                }}
            />

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default News;
