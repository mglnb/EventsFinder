import ListEvents from '../components/screens/ListEvents'
import Event from '../components/screens/Event'

export const ListTabStack = {
  ListEventsNotFilter: {
    screen: ListEvents,
    navigationOptions: ({ navigation }) => {
      let title = (navigation && navigation.state && navigation.state.params && navigation.state.params.filter) || 'Lista de Eventos'
      return {
        title: title
      }
    }
  },
  Events: {
    screen: Event,
    path: '/event',
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Evento'
      }
    }
  }
}

export const ListTabConfig = {
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
