const deviceview = {
  initialState: {
    navigationPath: [{ component: "maxapps", props: {} }],
    dataToSet: {},
    parentToEdit: ["maxapps"],
    currentComponent: "LoginScreen",
    lookups: [],
    language: "en",
  },
  reducers: {
    navigateTo: (state, action) => {
      const { component, props } = action.payload;
      const newPath = [...state.navigationPath, { component, props }];
      return {
        ...state,
        navigationPath: newPath,
        currentComponent: component,
      };
    },
    navigateToWithDrawer: (state, action) => {
      const { component, props } = action.payload;
      // Keep the first element of the existing navigationPath, if it exists
      const firstPath =
        state.navigationPath.length > 0 ? [state.navigationPath[0]] : [];
      const newPath = [...firstPath, { component, props }];
      return {
        ...state,
        navigationPath: newPath,
        currentComponent: component,
      };
    },

    navigateBack: (state) => {
      if (state.navigationPath.length > 1) {
        const newPath = state.navigationPath.slice(0, -1);
        const previousComponent = newPath[newPath.length - 1].component;
        return {
          ...state,
          navigationPath: newPath,
          currentComponent: previousComponent,
        };
      }
      return state;
    },
    dataAdded: (dataSet, action) => {
      const { data, parent, component } = action.payload || {};
      Array.isArray(data)
        ? (dataSet["dataToSet"] = {})
        : (dataSet["dataToSet"] = { ...data });
      dataSet["parentToEdit"] = parent;
      dataSet["currentComponent"] = component;
    },
    reset: (dataSet) => {
      return (dataSet = {
        navigationPath: [{ component: "maxapps", props: {} }],
        dataToSet: {},
        parentToEdit: [],
        currentComponent: "LoginScreen",
      });
    },
    setLanguage: (state, action) => {
      const { language } = action.payload;
      return {
        ...state,
        language,
      };
    },
    loginAct: (state, action) => {
      return {
        ...state,
        currentComponent: "maxapps",
      };
    },
    logoutAct: (state, action) => {
      return {
        ...state,
        currentComponent: "LoginScreen",
      };
    },
  },
};

export default deviceview;
