import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './components/Input'
import StateInput from './components/StateInput';
import { Controller, useForm } from 'react-hook-form';

const Form = () => {
  const {control} = useForm({defaultValues: {email: ''}})
  return (
    <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <Input
        placeholder="Type in here (react hook form input)"
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
    name="email"
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Input/>
      <StateInput/>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
