import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./item.styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addTrash } from "../../../redux/trash-employee/trash.slice";
import { deleteEmployee } from "../../../redux/employee/employee.slice";
function Item(props) {
  const navigation = useNavigation();
  const { data } = props;
  // const trash = useSelector((state) => state.trash.list);
  const dispatch = useDispatch();
  const onAddPersonal = () => {
    // const employee = {};
    Alert.alert(
      "Xác nhận",
      "Bạn có muốn xoá nhân viên này không?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteEmployee({ id: data.id }));
            dispatch(addTrash({ ...data }));
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://vcdn1-thethao.vnecdn.net/2024/01/11/screenshot-2024-01-11-at-14-12-6403-7730-1704957386.png?w=460&h=0&q=100&dpr=2&fit=crop&s=PDqg4OjS0ZMXTgWl2fVlzg",
          //uri:{data.image}
        }}
      />
      <View style={styles.infoBox}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("update-personal", { data });
          }}
        >
          <Text style={styles.personalName}>{data.name}</Text>
        </TouchableOpacity>
        <Text style={styles.personalJob}>{data.job}</Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={onAddPersonal}>
        <Ionicons name="file-tray-stacked-sharp" size={30} color="#1c7ed6" />
      </TouchableOpacity>
    </View>
  );
}

export default Item;
