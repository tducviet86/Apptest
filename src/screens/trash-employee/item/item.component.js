import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./item.styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteTrash } from "../../../redux/trash-employee/trash.slice";
import { addEmployee } from "../../../redux/employee/employee.slice";

function Item(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const onDeletePersonal = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có muốn hoàn tác nhân viên này không?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(deleteTrash({ id: data.id }));
            dispatch(addEmployee({ ...data }));
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
        <Text style={styles.personalName}>{data.name}</Text>
        <Text style={styles.personalJob}>{data.job}</Text>
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={onDeletePersonal}>
        <Ionicons name="arrow-back-circle-sharp" size={32} color="#A4BC97" />
      </TouchableOpacity>
    </View>
  );
}

export default Item;
