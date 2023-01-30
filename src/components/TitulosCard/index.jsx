import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
import { ConverterValor } from "../../common/ConverterValor";

export const TitulosCard = ({ item }) => {

    const navigation = useNavigation();

    const dataV = new Date(item?.dataVencimento)
    const formatdataVencimento = format(dataV, "dd/MM/yyyy");

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Titulos ", { item: item })}>
            <View style={styles.containerMain}>

                {item?.descricao === null ? "" : <Text style={styles.textoTitulo}>{item?.descricao}</Text>}

                {item?.centroDeCusto === null ? "" : <Text style={styles.texto}>Centro de custo: {item?.centroDeCusto.descricao}</Text>}

                {item?.valor === null ? "" : <Text style={styles.texto}>Valor: <ConverterValor valor={(Math.floor(""+item?.valor * 100).toFixed(0) / 100).toFixed(2)} /></Text>}

                {item?.dataVencimento === null ? "" : <Text style={styles.texto}>Data vencimento: {formatdataVencimento}</Text>}

            </View>
        </TouchableOpacity>
    )
};
