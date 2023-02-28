import React from "react";
import { SafeAreaView, View, Text, FlatList, ScrollView, Dimensions} from "react-native/types";
import news_data from './new_data.json';
import NewsCard from "./components/NewsCard";
import news_banner_data from './new_banner_data.json';

function App(){

    const renderNews = ({item}) => <NewsCard news={item}/>
    return(
        <SafeAreaView style={StyleSheet.container}>
            <Text style={styles.headerText}>NEWS</Text>
                <FlatList
                ListHeaderComponent={()=><ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                news_banner_data.map(bannerNews=><Image style={styles.banner_image} source={{uri:bannerNews.imageUrl}}/>)
                }
            </ScrollView>}
                keyExtractor={item => item.u_id.toString()}
                data={news_data}
                renderItem={renderNews}
                />
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
    },
    banner_image:{
        height:Dimensions.get('window').height/5,
        width:Dimensions.get('window').height/2,
        
    },
    headerText:{
        fontWight:'bold',
        fontSize:50,

    }
})