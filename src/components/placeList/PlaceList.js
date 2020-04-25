/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import ListItem from '../listItem/ListItem';
const PlaceList = (props) => {
    return (
        <FlatList
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    reImage={info.item.remoteImage}
                    unit={info.item.key}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
}

// <ListItem
//         placeName={place}
//         places={props.places}
//         unit={index}
//         onItemPressed={() => props.onItemSelected(index)}
//     />

export default PlaceList;
