import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    image:
      'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg',
    like: '0',
  },
  {
    id: '2',
    image:
      'https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg',
    like: '0',
  },
  {
    id: '3',
    image:
      'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg',
    like: '0',
  },
  {
    id: '4',
    image:
      'https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg',
    like: '0',
  },
];

const ImageVIew = ({image}) => {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: image,
      }}
    />
  );
};

const Dashboard = count => {
  const [counts, setCount] = useState(0);
  const dislike = () => setCount(prevCount => prevCount - 1);
  const like = () => setCount(prevCount => prevCount + 1);

  const renderItem = ({item}) => (
    <View>
      <ImageVIew image={item.image} />
      <View style={styles.buttonContainer}>
        {count.count !== 0 ? (
          <Text style={styles.counter}>{count.count} Like</Text>
        ) : (
          <Text style={styles.counter}>{counts} Like</Text>
        )}

        <View>
          <TouchableOpacity style={styles.like} onPress={like}>
            <Text style={{color: '#ffffff'}}>Like</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.dislike} onPress={dislike}>
            <Text style={{color: '#ffffff'}}>Dislike</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const TopNavBar = () => {
  const [count, setCount] = useState(0);
  const likeAll = () => setCount(prevCount => prevCount + 1);
  const resetAll = () => setCount(0);
  const dislikeAll = () => setCount(prevCount => prevCount - 1);

  return (
    <>
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.buttonLikeAll} onPress={likeAll}>
            <Text style={{color: '#ffffff'}}>Like All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonResetAll} onPress={resetAll}>
            <Text style={{color: '#000000'}}>Reset All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonDislikeAll}
            onPress={dislikeAll}>
            <Text style={{color: '#ffffff'}}>Disike All</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Dashboard count={count} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginStart: 20,
    marginEnd: 20,
  },
  buttonLikeAll: {
    padding: 6,
    height: 35,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#005b8f',
    alignItems: 'center',
  },
  buttonResetAll: {
    padding: 6,
    height: 35,
    width: 100,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonDislikeAll: {
    padding: 6,
    height: 35,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#ff0000',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    marginTop: 20,
    width: 350,
    height: 350,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    paddingStart: 20,
    borderWidth: 2,
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  counter: {
    padding: 6,
    width: 100,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'gray',
    marginStart: 10,
    textAlign: 'center'
  },
  like: {
    padding: 6,
    height: 35,
    width: 70,
    borderColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#005b8f',
    marginStart: 35,
  },
  dislike: {
    padding: 6,
    height: 35,
    width: 70,
    borderColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ff0000',
    marginEnd: 30,
  },
});

export default TopNavBar;
