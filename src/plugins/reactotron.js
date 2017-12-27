import Reactotron from 'reactotron-react-native'

let scriptHostname;


console.tron = Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!


console.ltron = console.tron.log;