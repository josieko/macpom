import react from "@vitejs/plugin-react-swc";

export default {
  plugins: [
    react({
      plugins: [["@swc/plugin-styled-components", {}]],
    }),
  ],
};
