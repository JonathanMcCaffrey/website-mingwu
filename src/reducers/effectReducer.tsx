import { BACKGROUND, DEBACKGROUND } from '../types';

const initialState = [
  {
    background: false
  }
];

export const EffectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BACKGROUND:
      return [
        ...state,
        {
          background: true
        }
      ];
    case DEBACKGROUND:
      return [
        ...state,
        {
          background: false
        }
      ];
    default:
      return state;
  }
};
