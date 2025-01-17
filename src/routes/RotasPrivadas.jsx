import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { CentroDeCusto } from '../screens/CentroDeCusto';
import { Titulos } from '../screens/Titulo';
import { Conta } from '../screens/Conta';
import { StatusBar } from 'expo-status-bar';
import { TitulosApagar } from '../screens/TitulosApagar';
import { TitulosAreceber } from '../screens/TitulosAreceber';
import { Periodo } from '../screens/Periodo';
import { TituloCadastra } from '../screens/TituloCadastra';
import { TitulosAtualizar } from '../screens/TitulosAtualizar';
import { TituloDetalheHome } from '../screens/TituloDetalheHome';
import { TitulosDetalhe } from '../screens/TituloDatalhe';
import { CentroDeCustoAtualizar } from '../screens/CentroDeCustoAtualizar';
import { CentroDeCustoCadastrar } from '../screens/CentroDeCustoCadastrar';
import { FontAwesome, FontAwesome5, Feather, Ionicons } from '@expo/vector-icons';
import { CentroDeCustoDetalhe } from '../screens/CentroDeCustoDetalhe';
import { NetworkInformation } from '../components/NetworkInformation';
import { ContaAtualizar } from '../screens/ContaAtualizar';
import { useContext, useEffect } from 'react';
import { api } from '../services/api';
import { AuthContext } from '../contexts/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeTab' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosApagar' component={TitulosApagar} options={{ headerShown: false }} />
            <Stack.Screen name='TitulosAreceber' component={TitulosAreceber} options={{ headerShown: false }} />
            <Stack.Screen name='Periodo' component={Periodo} options={{ headerShown: false }} />
            <Stack.Screen name='Titulos ' component={TituloDetalheHome} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

const TituloStake = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Titulos' component={Titulos} options={{ headerShown: false }} />
            <Stack.Screen name='Titulos ' component={TitulosDetalhe} options={{ headerShown: false }} />
            <Stack.Screen name='Cadastrar Título' component={TituloCadastra} options={{ headerShown: true }} />
            <Stack.Screen name='Atualizar Título' component={TitulosAtualizar} options={{ headerShown: true }} />
        </Stack.Navigator>
    )
};

const CentroDecustoStake = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='CentroDeCustoStake' component={CentroDeCusto} options={{ headerShown: false }} />
            <Stack.Screen name='Cadastrar Centro De Custo' component={CentroDeCustoCadastrar} options={{ headerShown: true }} />
            <Stack.Screen name='Atualizar Centro De Custo' component={CentroDeCustoAtualizar} options={{ headerShown: true }} />
            <Stack.Screen name='Centro De Custo Detalhe' component={CentroDeCustoDetalhe} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

const ContatoStake = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='ContaStake' component={Conta} options={{ headerShown: false }} />
            <Stack.Screen name='Atualizar conta' component={ContaAtualizar} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};


export const RotasPrivadas = () => {

    const { logoutContext } = useContext(AuthContext);
    
    const valida = () => {
        api.interceptors.response.use(
            response => Promise.resolve(response),
            error => {
                alert("token expirado!")
                if (error.response.status === 403) {
                    setTimeout(() => {
                        logoutContext()
                    }, 2000)
                }
    })}

    useEffect(() => {
        valida()
    }, [])

    return (
        <>
            <NetworkInformation />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        let iconColor;

                        if (route.name === 'Conta') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            iconColor = focused ? '#1b6dc1' : '#000000';
                            return <FontAwesome name="user-circle-o" size={24} color={iconColor} />;

                        } else if (route.name === 'Títulos') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? '#1b6dc1' : '#000000';
                            return <FontAwesome5 name="list-alt" size={24} color={iconColor} />;

                        } else if (route.name === 'Centros de Custo') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? '#1b6dc1' : '#000000';
                            return <Feather name="list" size={24} color={iconColor} />;

                        } else if (route.name === 'Home') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            iconColor = focused ? '#1b6dc1' : '#000000';
                            return <Ionicons name="home" size={24} color={iconColor} />;
                        }
                    },
                    tabBarInactiveTintColor: '#2D2B2B',
                })}
            >

                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="Centros de Custo"
                    component={CentroDecustoStake}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="Títulos"
                    component={TituloStake}
                    options={{ headerShown: false }}
                />

                <Tab.Screen
                    name="Conta"
                    component={ContatoStake}
                    options={{ headerShown: false }}
                />

            </Tab.Navigator>

            <StatusBar
                barStyle='light-content'
                backgroundColor='#1b6dc1'
                translucent={false}
                networkActivityIndicatorVisible={true}
            />

        </>
    );
};