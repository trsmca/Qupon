// src/styles.js
import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#C62828", // deep red
  text: "#333",
  border: "#ccc",
  background: "#fff",
};

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: "center",
  },
  logo: {
    fontSize: 72,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 32,
  },
  phoneContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 8,
    color: COLORS.text,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  terms: {
    fontSize: 12,
    textAlign: "center",
    color: "#777",
    marginTop: 12,
  },
  otpBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  otpBox: {
    borderBottomWidth: 2,
    borderColor: COLORS.border,
    width: 40,
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 8,
  },
  resend: {
    textAlign: "center",
    color: COLORS.primary,
    marginTop: 16,
  },
});
