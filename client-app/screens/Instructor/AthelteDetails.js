import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Modal from "./../Supervisor/ModalView";
import { useNavigation } from "@react-navigation/native";
import ipconfig from "../../ipconfig";
import { useSelector } from "react-redux";
const AthleteDetails = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigation();
  const [athelteList, setAthelteList] = useState([]);
  const Userdata = useSelector((state) => state.user.User);
  const sid = Userdata.SportComplexId;

  const ip = ipconfig.ip;
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://${ip}:9999/countOfPayment?sportsComplexId=${sid}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setAthelteList(result.data);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      {show && <Modal />}
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              navigate.goBack();
            }}
          >
            <View style={styles.back}>
              <Ionicons name="arrow-back" size={24} />
            </View>
          </Pressable>
          <View style={styles.heading}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Students Detail
            </Text>
          </View>
          <View style={styles.info}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "grey" : null,
                },
              ]}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Feather name="info" size={24} />
            </Pressable>
          </View>
        </View>
        <View style={styles.container1}>
          <View style={styles.header}>
            <Picker
              style={styles.dropdownPicker}
              //   selectedValue={selectedOption}
              //   onValueChange={handleDropdownChange}
            >
              <Picker.Item label="Cricket" value="getSports" />
              <Picker.Item label="volleyball" value="searchSportsComplex" />
            </Picker>
            <Picker
              style={styles.dropdownPicker}
              //   selectedValue={selectedOption}
              //   onValueChange={handleDropdownChange}
            >
              <Picker.Item label="Time Slot" value="getSports" />
              <Picker.Item label="Sports Complex" value="searchSportsComplex" />
            </Picker>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {athelteList.map((item, index) => (
            <View style={styles.card} key={index}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#f0f0f0" : "white",
                    padding: 20,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => {
                  navigate.navigate("AthleteProfile", { data: item });
                }}
              >
                <View style={styles.StudentsDetail}>
                  <View style={styles.leftColumn}>
                    <Image
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginLeft: 1,
                      }}
                      source={{
                        uri: `http://${ip}:9999/${item.athlete[0].baseUrl.slice(
                          1
                        )}`,
                      }}
                    />
                  </View>
                  <View style={styles.rightColumn}>
                    <Text style={styles.name}>{item.user[0].Name}</Text>
                    {item.sports.map((item, index) => (
                      <Text style={styles.name} key={index}>
                        {item.SportName}
                      </Text>
                    ))}
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
    backgroundColor: "#f0f0f0",
  },
  container1: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    // paddingVertical: "5%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    padding: 10,
    marginLeft: "-8%",
  },
  info: {
    paddingRight: 50,
    marginHorizontal: 30,
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginLeft: "6%",
    width: "100%",
    height: 50,
    backgroundColor: "#f0f0f0",
  },
  StudentsDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    flex: 2,
    paddingLeft: 50,
    paddingBottom: 8,
    marginLeft: 6,
  },
  name: {
    fontSize: 16,
    color: "black",
    marginTop: 15,
  },
  back: {
    marginHorizontal: 30,
    alignSelf: "center",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 17,
  },
  input: {
    marginLeft: 6,
  },
  dropdownPicker: {
    flex: 1,
    height: 40,
    borderColor: "lightgray",
  },
});

export default AthleteDetails;
