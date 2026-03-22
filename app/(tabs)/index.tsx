import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

//Pop-up de selecao do react native
import { Picker } from "@react-native-picker/picker";
//Funcao do arquivo conversor.js
import { converterMoeda } from "../../src/utils/conversor";

//Const para lembrar oq o usuario digitou e quais moedas ele selecionou
export default function App() {
  const [valorDigitado, setValorDigitado] = useState("");
  const [resultado, setResultado] = useState(0);
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("BRL");

  //Chama a funcao assim que o usuario aperta o botao de converter
  const lidarComConversao = () => {
    //Transforma a string em float
    const valorNumerico = parseFloat(valorDigitado.replace(",", "."));

    //Envia os dados para a funcao no arquivo conversor.js
    const valorConvertido = converterMoeda(
      valorNumerico,
      moedaOrigem,
      moedaDestino,
    );

    //Esconde o teclado e atualiza valores assim que clica o botao
    setResultado(valorConvertido);
    Keyboard.dismiss();
  };

  //HTML
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <Text style={styles.label}>Valor para converter:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 100"
        value={valorDigitado}
        onChangeText={setValorDigitado}
      />

      <Text style={styles.label}>De (Moeda Origem):</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moedaOrigem}
          onValueChange={(itemValue) => setMoedaOrigem(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Kwanza (AOA)" value="AOA" />
        </Picker>
      </View>

      <Text style={styles.label}>Para (Moeda Destino):</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moedaDestino}
          onValueChange={(itemValue) => setMoedaDestino(itemValue)}
        >
          <Picker.Item label="Dólar (USD)" value="USD" />
          <Picker.Item label="Real (BRL)" value="BRL" />
          <Picker.Item label="Kwanza (AOA)" value="AOA" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.botao} onPress={lidarComConversao}>
        <Text style={styles.textoBotao}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.areaResultado}>
        <Text style={styles.textoResultado}>Resultado:</Text>
        <Text style={styles.valorResultado}>
          {resultado} {moedaDestino}
        </Text>
      </View>
    </View>
  );
}

//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    marginBottom: 15,
  },
  pickerContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 15,
    overflow: "hidden",
  },
  botao: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  areaResultado: {
    marginTop: 30,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
  },
  textoResultado: {
    fontSize: 16,
    color: "#555",
  },
  valorResultado: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 10,
  },
});
