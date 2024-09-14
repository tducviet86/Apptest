import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  contentContainer: {
    paddingBottom: 150,
  },
  avoidingViewContainer: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: "#495057",
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 30,
  },
  input: {
    marginBottom: 25,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E9ECEF",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "absolute",
    top: 40,
    right: 30,
    elevation: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
