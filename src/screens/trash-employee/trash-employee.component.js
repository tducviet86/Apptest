import { View, Text, FlatList, TextInput } from "react-native";
import Item from "./item/item.component";
import styles from "./trash-employee.style";
import { Ionicons } from "@expo/vector-icons";
// import { useContext } from "react";
// import { AppContext } from "../../../AppContext";
import { useSelector } from "react-redux";

// func
function Trash() {
  // const { cart } = useContext(AppContext);
  const cart = useSelector((state) => state.trash.list);
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.titleText}>Danh Sách Nghỉ Việc</Text>
        <View style={styles.containerInput}>
          <Ionicons name="search" size={30} color="#868E96" />
          <TextInput style={styles.input} placeholder="Tìm Kiếm Nhân Viên" />
        </View>
      </View>
      {cart.length === 0 ? (
        <Text style={{ fontSize: 20, fontWeight: 500 }}>
          •Không có nhân viên nào
        </Text>
      ) : (
        <FlatList
          style={styles.container}
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item data={item} />}
        />
      )}
    </View>
  );
}

export default Trash;
