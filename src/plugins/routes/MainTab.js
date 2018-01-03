import Category from '../components/screens/Category'
import ListEvents from '../components/screens/ListEvents'

export const MainTabStack = {
  Category: {
    screen: Category,
    path: '/',
    navigationOptions: {
      title: 'Categorias'
    }
  },
  ListEvents: {
    screen: ListEvents,
    path: '/:filter',
    navigationOptions: ({ navigation }) => {
      let title = (navigation && navigation.state && navigation.state.params && navigation.state.params.filter) || 'Lista de Eventos'
      return {
        title: `${title}`
      }
    }
  }
}

export const MainTabConfig = {
  navigationOptions: {
    headerTitleStyle: {
      color: 'white'
    },
    headerStyle: {
      backgroundColor: '#5480F3'
    },
    headerTintColor: 'white'
  }
}