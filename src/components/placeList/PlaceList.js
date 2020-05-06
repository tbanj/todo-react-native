/* eslint-disable prettier/prettier */
import React, { Suspense, lazy } from 'react';
import { FlatList, View, ScrollView, Text } from 'react-native';
import ListItem from '../listItem/ListItem';
// const ListItem = lazy(() => import('../listItem/ListItem'));
const PlaceList = (props) => {
    // console.log() only work with browser to see this visit http://localhost:8081/debugger-ui/
    return (
        <FlatList
            data={props.places}
            renderItem={(info, index) => {
                return <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    reImage={info.remoteImage}
                    unit={info.item.key}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />;
            }}
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
