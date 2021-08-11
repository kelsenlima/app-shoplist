import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';
 
export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
      Database.getItems().then(items => setItems(items));
  }, [route]); 

  return (
    <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Lista de Compras</Text>
        <ScrollView 
           //scrollEnabled={scrollEnabled}
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}
            contentContainerStyle={{padding: 10}}>
            { items.map(item => {
              return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} navigation={navigation} />
            }) }
        </ScrollView>
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
  title: {
    color: '#DD4814',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '100%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});
