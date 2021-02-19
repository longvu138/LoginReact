import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from "./styles";

const SignUpScreen= () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            "data:image/png;base64,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",
        }}
      />
      <Text style={styles.TextLogin}>Sign Up</Text>
      <TouchableWithoutFeedback>
        <View>
          <View>
            <FontAwesome5Icon
              name="user"
              size={25}
              color="#f95780"
              style={styles.InputIcon}
            ></FontAwesome5Icon>
            <TextInput
              style={styles.TextInput}
              placeholder="email@email.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
            />
          </View>
          <View>
            <FontAwesome5Icon
              name="lock"
              size={25}
              color="#f95780"
              style={styles.InputIcon}
            ></FontAwesome5Icon>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </View>
          <View>
            <FontAwesome5Icon
              name="lock"
              size={25}
              color="#f95780"
              style={styles.InputIcon}
            ></FontAwesome5Icon>
            <TextInput
              style={styles.TextInput}
              placeholder="ConfirmPassword"
              placeholderTextColor="gray"
              secureTextEntry
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>SignUp</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
