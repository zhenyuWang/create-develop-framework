export default () => {
  return {
    type: "list",
    name: "repositoryName",
    message: "select project type",
    choices: [
      {
        name: "vue2-element-admin",
      },
      {
        name: "vue3-element-admin",
      },
      {
        name: "large-screen-visualization-echarts",
      },
    ],
    default() {
      return 0
    },
  }
}
