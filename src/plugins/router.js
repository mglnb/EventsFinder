import { TabBarBottom, TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import ListEvents from '../components/screens/ListEvents'
import { MainTabStack, MainTabConfig } from './routes/MainTab'
import { ListTabStack, ListTabConfig } from './routes/ListTab'

const MainTab = StackNavigator(MainTabStack, MainTabConfig)
const ListTab = StackNavigator(ListTabStack, ListTabConfig)

const TabsConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    labelStyle: {
      fontSize: 12
    },
    iconStyle: {
      height: 24,
      width: 24
    },
    style: {
      height: 56,
      backgroundColor: 'transparent'
    },
    activeTintColor: '#5480F3',
    inactiveTintColor: 'black'
  }
}

export const Tabs = TabNavigator({
  TabCategory: {
    screen: MainTab,
    screenProps: 'none',
    navigationOptions: {
      tabBarLabel: 'Categorias',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='filter-list' color={tintColor} />
      )
    }
  },
  TabEvents: {
    screen: ListTab,
    screenProps: 'none',
    navigationOptions: {
      tabBarLabel: 'Listar Eventos',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='format-list-bulleted' color={tintColor} />
      )
    }
  },
  Config: {
    screen: ListEvents,
    screenProps: 'none',
    navigationOptions: {
      tabBarLabel: 'Configurações',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='settings' color={tintColor} />
      )
    }
  }
}, TabsConfig)
