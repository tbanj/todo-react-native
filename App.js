/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// eslint-disable-next-line prettier/prettier
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TextInput, StatusBar, Button } from 'react-native';

// import { Header, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen';
import PlaceList from './src/components/placeList/PlaceList';
import PlaceImage from './src/assets/theater.jpeg';
const App: () => React$Node = () => {
  const [placeName, setPlaceName] = useState('');
  const [places, setPlaces] = useState([]);

  const placeNameChangeHandler = (event) => {
    setPlaceName(event);
  };

  const placeDeletedHandler = (data) => {
    const newSate = [...places];
    const removeText = newSate.filter((plac, ind) => plac.key !== data);
    setPlaces(removeText);
  };

  /* Text node can't be styled as View node for Text Node to be well styled
  it has to be place in another component */
  // const placesOutput = places.map((place, index) => (
  //   <ListItem
  //     key={index}
  //     placeName={place}
  //     places={places}
  //     unit={index}
  //     onItemPressed={placeDeletedHandler}
  //   />
  // ));

  const placeSubmitHandler = () => {
    if (placeName.trim() === '') {
      return;
    }
    //  in react-native to view debug make use of alert to display content u want to troubleshoot
    setPlaces([
      ...places,
      {
        key: new Date().getTime() + '', name: placeName,
        image: PlaceImage, remoteImage: {
          uri: 'http://4.bp.blogspot.com/-TLR8ISV2qWo/TyUeVqg9xmI/AAAAAAAACOU/1rCZw9-uj50/s640/62589635.jpg',
          width: 30, height: 30,
        },
      },
    ]);
    setPlaceName('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputCss} placeholder="An awesome place" onChangeText={placeNameChangeHandler} value={placeName}
        />
        <Button style={styles.placeButton} title="Add" onPress={placeSubmitHandler} />
      </View>
      {/* Scrollview is not good for long list but it affect performance
      is good only for short list below 50
      FlatList is good for dynamic list, a list that can be upto 10,000 elements
      */}
      {/* <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView> */}
      <View style={styles.listContainer}>
        <PlaceList places={places} onItemDeleted={placeDeletedHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: '100%',
    margin: 5,
  },
  inputCss: {
    width: '70%',
    // borderColor: 'black',
    // borderWidth: 1,
    // marginTop: 32,
  },
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeButton: {
    width: '30%',
  },
});
export default App;
