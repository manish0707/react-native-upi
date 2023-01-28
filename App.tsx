import React, {useState} from 'react';
import {Button, Text} from 'react-native';
import {RNUpiPayment} from './upiPayment';

export default function App() {
  const [response, setResponse] = useState('');
  // const [upiID, setUpidId] = useState('');
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState(1);

  const url = 'url_enclosed_in_qrCode';

  const successCallback = (data: any) => {
    console.log(data);
    setResponse(JSON.stringify(data));
  };

  const failureCallback = (data: any) => {
    console.log(data);
    setResponse(JSON.stringify(data));
  };

  const handlePress = async () => {
    RNUpiPayment.initializePayment(url, successCallback, failureCallback);
  };

  return (
    <>
      <Text>My UPI payment app</Text>
      {/* <TextInput
        placeholder="Enter merchant UPI ID"
        onChangeText={newText => setUpidId(newText)}
      />
      <TextInput
        placeholder="Enter merchant Name"
        onChangeText={newText => setName(newText)}
      />
      <TextInput
        placeholder="Enter Amount"
        onChangeText={newText => setAmount(Number(newText))}
        maxLength={100}
        keyboardType="numeric"
      /> */}
      <Button title="Pay" onPress={handlePress} />
      <Text>This is response : {response}</Text>
    </>
  );
}
