const InitialState = {
  streamList: [],
  streamer: "",
  openChat: false,
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

export const streamerReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "ADD_STREAMER":
      return {
        ...state,
        streamer: action.payload,
      };
    case "REMOVE_STREAMER":
      return { ...state, streamer: "" };
    default:
      return state;
  }
};

export const closeChatReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        openChat: action.payload,
      };
    default:
      return state;
  }
};
