import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    height: 100,
    gap: 15,
    borderRadius: 20,
    backgroundColor: "#E9ECEF",
    // shadowColor: "#212529",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
  },
  image: {
    width: 70,
    height: 70,
    marginTop: 5,
    borderRadius: 999,
  },
  infoBox: {
    flex: 3,
    gap: 5,
    marginTop: 10,
  },
  personalName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#343a40",
  },
  personalJob: {
    fontSize: 18,
    fontWeight: "300",
    color: "#979797",
  },
  highlight: {
    fontWeight: "700",
  },
  cartButton: {
    justifyContent: "center",
  },
});
export default styles;
