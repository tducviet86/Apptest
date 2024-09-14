import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useRef, useContext } from "react";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import styles from "./add-personal.styles";

import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employee/employee.slice";

function AddPersonal(props) {
  const {
    // route: {
    //   params: { data },
    // },
    navigation,
  } = props;

  const name = useRef("");
  const job = useRef("");
  const dispatch = useDispatch();

  const onSavePersonal = () => {
    if (name.current === "") {
      alert("Tên không được bỏ trống!");
      return;
    }
    if (job.current === "") {
      alert("Chức Vụ không được bỏ trống!");
      return;
    }

    let personal = {
      name: name.current,
      job: job.current,
    };
    dispatch(addEmployee(personal));
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.avoidingViewContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>Thêm Nhân Viên</Text>
        <TextInput
          style={styles.input}
          placeholder="Họ Và Tên "
          onChangeText={(text) => (name.current = text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Chức Vụ"
          onChangeText={(text) => (job.current = text)}
        />

        <PrimaryButton onPress={onSavePersonal}>Lưu</PrimaryButton>
      </ScrollView>
      <TouchableOpacity
        hitSlop={10}
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={25} color="#495057" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default AddPersonal;
