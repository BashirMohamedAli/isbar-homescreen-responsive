import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  const onButton = () => {
    myResult(10);
  };
  return (
    <SafeAreaView>
      {/* <View style={styles.container}> */}

      {/* <View style={styles.item1}>
          <Image source={require("../assets/img/hordhac.png")} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.item2}>
          <Image source={require("../assets/img/hordhac.png")} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.item1}>
          <Image source={require("../assets/img/hordhac.png")} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.item2}>
          <Image source={require("../assets/img/hordhac.png")} style={styles.image} resizeMode="contain" />
        </View> */}
      <ScrollView style={{ backgroundColor: "#F2F2F2" }}>
        <View>
          <Text style={styles.header}>Fron End</Text>
          <View style={styles.container}>
            <View style={styles.Box1}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box2}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
          <View style={styles.container2}>
            <View style={styles.Box1}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box2}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.Box1}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box2}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.Box1}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Box2}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/img/css.png")}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text style={styles.text}>1. Hordhac</Text>
              </TouchableOpacity>
            </View>
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  container2: {
    flex: 1,
    marginBottom: 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Box1: {
    padding: 30,
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Box2: {
    padding: 30,
    marginEnd: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 18,
    // fontFamily: "Ubuntu",
    color: "#000",
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    paddingTop: 10,
    paddingLeft: 15,
    // fontFamily: "OpenSans",
  },
  // container: {
  //   flex: 1,
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginTop: 50,
  // },
  // item1: {
  //   padding: 30,
  //   marginLeft: 20,
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 8,
  //   marginHorizontal: 5,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  image: {
    width: 80,
    height: 80,
  },
  // item2: {
  //   padding: 30,
  //   marginEnd: 20,
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 8,
  //   marginHorizontal: 5,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,

  //   elevation: 5,
  // },
  // image: {
  //   width: 100,
  //   height: 100,
  // }
});

export default HomeScreen;
