import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button, Text, Easing } from "react-native";
import { Container, Title, ButtonWrapper } from "./styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export function Example() {
  const [isLoading, setIsLoading] = useState(true);
  const [fill, setFill] = useState(0);
  const [circularProgress, setCircularProgress] = useState();
  const axios = require("axios").default;

  function incrementFill() {
    setFill(fill + 10);
  }

  function decrementFill() {
    setFill(fill - 10);
  }

  function animate() {
    // circularProgress.animate(100, 8000, Easing.quad);
    setFill(100);
  }

  function fetchTide() {
    var options = {
      method: "GET",
      url: "https://tides.p.rapidapi.com/tides",
      params: {
        latitude: "-5.8778067",
        longitude: "-35.2120523",
        duration: "1440",
        interval: "60",
      },
      headers: {
        "x-rapidapi-host": "tides.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("FETCH TIDE", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function fetchWeather() {
    var options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/weather",
      params: {
        q: "Natal",
        lat: "-5.8778067",
        lon: "-35.2120523",
        lang: "pt",
        units: "metric",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("FETCH WEATHER", response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    setIsLoading(false);

    // fetchTide();

    fetchWeather();
  });

  return (
    <>
      <Container>
        {isLoading ? (
          <ActivityIndicator
            color="white"
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            size="large"
          />
        ) : (
          <>
            <Title>Example Title</Title>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={75}
              tintColor="#00e0ff"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#3d5875"
              rotation={-135}
            />
            <AnimatedCircularProgress
              ref={(ref) => setCircularProgress(ref)}
              size={120}
              width={15}
              fill={fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
              rotation={-135}
            >
              {(fill) => <Text>{Math.round(fill)}</Text>}
            </AnimatedCircularProgress>

            <ButtonWrapper>
              <Button title="Increment" onPress={() => incrementFill()} />
              <Button title="Decrement" onPress={() => decrementFill()} />
              <Button title="Animate" onPress={() => animate()} />
            </ButtonWrapper>
          </>
        )}
      </Container>
    </>
  );
}
