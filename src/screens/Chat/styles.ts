import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  icon: {
    fontSize: 24,
    padding: 5
  },
  title: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
})

export default styles;