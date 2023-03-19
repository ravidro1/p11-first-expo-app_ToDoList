import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StatusBar,
} from "react-native";
import Body from "./components/Body";
import Header from "./components/Header";
import SandBox from "./components/SandBox";

export default function App() {
  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Header />
        </View>
        <View style={{ flex: 9 }}>
          <Body />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight || 0,
    // width: "100%",
    // height: "100%",
  },
});
