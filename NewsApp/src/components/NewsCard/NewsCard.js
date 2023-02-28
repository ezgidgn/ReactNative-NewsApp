import React from "react";
import React from "react";
import {View, Text, Image,StyleSheet} from 'react-native';
import styles from './NewsCard.style';


const NewsCard = ({news})=>{
    
    return(
        <View style={StyleSheet.container}>
            <Image style={styles.image} source={{uri:news.ImageUrl}}/> 
            <View style={styles.inner_container}>

            </View>
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.description}>{news.description}</Text>
                <Text style={styles.author}>{news.author}</Text>
        </View>

    );
}



export default NewsCard;