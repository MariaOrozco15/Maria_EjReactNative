import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ListaEstudiante = () => {
  const [nombres, setNombre] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    setNombre([...nombres, inputValue]);
    setInputValue('');
  };

  const sortedNames = [...nombres].sort();

  return (
    <View>
      <Text style={{ marginTop: 20, fontSize: 20 }}>INGRESE UN NOMBRE</Text>
      <TextInput
        style={{ height: 45, borderColor: 'gray', borderWidth: 1, marginTop: 25, fontSize: 20}}
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Ingresa un nombre"
      /> 
        <Button
      onPress={handleSubmit}
      title="Agregar"
      style={{
        backgroundColor: '#4169e1',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      }}
      color="#0000ff"
    />

      <Text style={{ marginTop: 20, fontSize: 20}}>Nombres ordenados alfabéticamente</Text>
      <FlatList style={{ marginTop: 20 }}
        data={sortedNames}
        renderItem={({ item }) => <Text style={{ marginTop: 20, fontSize: 20}} >{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};



export default ListaEstudiante;
