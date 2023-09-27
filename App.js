import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet, Text, View } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';

export default function App() {

  return (    
    <View style={styles.AndroidSafeArea}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false}
      />
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Row item={item} />
          )}
        ></FlatList>
    </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 35 : 0
  }
});
