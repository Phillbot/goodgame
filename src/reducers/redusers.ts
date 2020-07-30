const InitialState = {
  streamList: [],
};

export const streamListReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "ADD_STREAM_LIST":
      return {
        ...state,
        streamList: [...state.streamList, action.payload],
      };
    case "REMOVE_STREAM_LIST":
      return { ...state, streamList: [] };
    default:
      return state;
  }
};
