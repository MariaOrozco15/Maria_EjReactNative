import React from 'react';
import { View, StatusBar, SafeAreaView, StyleSheet, Text  } from 'react-native';
import ListaEstudiante from './ListaEstudiante';

const App = () => {
  return (
  <View style={styles.container}>
        {/* StatusBar para establecer el estilo de la barra de estado */}
        <StatusBar barStyle="dark-content" backgroundColor="green" /> 
       {/* SafeAreaView para asegurarse de que el contenido no se superponga con el área
       reservada por el sistema operativo. */}
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <Text style={styles.headerText}>María Orozco</Text>
            <Text style={styles.headerText}>27:08</Text>
            <Text style={styles.headerText}>Nicaragua</Text>
        </View>

      <ListaEstudiante/>
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    safeArea: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 16,
      backgroundColor: 'blue',
    },
    headerText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default App;