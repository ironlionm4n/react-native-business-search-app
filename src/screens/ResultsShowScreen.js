import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>ResultsShowScreen</Text>
      <Text>{result.name}</Text>
      <Text>{result.rating}</Text>
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({});
