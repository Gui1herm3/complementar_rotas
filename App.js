import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const amigo1 = {
  nome: "Vitor",
  justificativa: "Vitor é um amigo de confiança porque sempre esteve ao meu lado nos momentos difíceis e demonstrou ser leal e confiável.",
  imitacao: "Gostaria que Vitor imitasse um avião."
};

const amigo2 = {
  nome: "Gabriel",
  justificativa: "Gabriel é uma amiga de confiança porque sempre me ouve e oferece conselhos sinceros, além de ser uma pessoa muito honesta e prestativa.",
  imitacao: "Gostaria que Gabriel imitasse um avião."
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Escolha um amigo:</Text>
      <Button
        title={amigo1.nome}
        onPress={() => navigation.navigate('Amigo1')}
      />
      <Button
        title={amigo2.nome}
        onPress={() => navigation.navigate('Amigo2')}
      />
    </View>
  );
}

function Amigo1Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{amigo1.nome}</Text>
      <Text>{amigo1.justificativa}</Text>
      <Text>Imitação ou mímica desejada: {amigo1.imitacao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function Amigo2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{amigo2.nome}</Text>
      <Text>{amigo2.justificativa}</Text>
      <Text>Imitação ou mímica desejada: {amigo2.imitacao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Amigo1" component={Amigo1Screen} />
        <Stack.Screen name="Amigo2" component={Amigo2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
