import React from "react";
import { colors } from "../services/constants/colors";
import "boxicons";

function LoginBtn({ label }) {
  return (
    <button
      style={{
        background: colors.white,
        width: 300,
        height: 45,
        borderRadius: 40,
        borderColor: "transparent",
        borderWidth: 0,
        fontSize: 16,
        fontWeight: "bold",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "center",
        marginBottom: 15,
        marginTop: 10
      }}>
      {label}
    </button>
  );
}

export default LoginBtn;
