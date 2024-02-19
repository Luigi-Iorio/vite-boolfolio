import { reactive } from "vue";

export const store = reactive({
  url: {
    baseUrl: "http://127.0.0.1:8000",
    apiUrl: {
      projects: "/api/projects",
    },
  },

  apiParams: {
    key: {
      searchWord: null,
    },
  },
});
