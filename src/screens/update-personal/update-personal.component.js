import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text,
  Platform,
} from "react-native";
import { useRef, useContext } from "react";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import styles from "./update-personal.style";
import { AppContext } from "../../../AppContext";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../redux/employee/employee.slice";

function UpdatePersonal(props) {
  const {
    route: {
      params: { data },
    },
    navigation,
  } = props;

  const name = useRef(data.name);
  const job = useRef(data.job);
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
      id: data.id,
      name: name.current,
      job: job.current,
    };
    dispatch(updateEmployee(personal));
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
        <Text style={styles.title}>Cập nhật nhân viên (#{data.id})</Text>
        <TextInput
          style={styles.input}
          placeholder="Họ Và Tên "
          onChangeText={(text) => (name.current = text)}
          defaultValue={name.current}
        />
        <TextInput
          style={styles.input}
          placeholder="Chức Vụ"
          onChangeText={(text) => (job.current = text)}
          defaultValue={job.current}
        />

        <PrimaryButton onPress={onSavePersonal}>Lưu</PrimaryButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
export default UpdatePersonal;
