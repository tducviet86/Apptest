import { View, Text, FlatList, TextInput } from "react-native";
import FloatButton from "../../components/float-button/float-button.component";
import Item from "./item/item.component";
import styles from "./employee-list.styles";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { searchEmployee } from "../../redux/employee/employee.slice";

// func
function EmployeeList({ navigation }) {
  const list = useSelector((state) => state.employee.filterList);
  // const [search, setSearch] = useState("");
  // // 1. phai co gia tri state de luu tru gia tri hien tai
  // console.log(search);
  // const filterList = list.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );
  // const handleSearch = (inputSearch) => {
  //   setSearch(inputSearch);
  // };

  const dispatch = useDispatch();
  const handleSearch = (inputSearch) => {
    dispatch(searchEmployee(inputSearch));
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.titleText}>Quản Lý Nhân Viên</Text>
        <View style={styles.containerInput}>
          <Ionicons name="search" size={30} color="#868E96" />
          <TextInput
            style={styles.input}
            placeholder="Tìm Kiếm Nhân Viên"
            onChangeText={handleSearch}
            // value={search}
          />
        </View>
      </View>
      <FlatList
        style={styles.container}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item data={item} />}
      />
      <FloatButton onPress={() => navigation.navigate("add-personal")} />
    </View>
  );
}

export default EmployeeList;
