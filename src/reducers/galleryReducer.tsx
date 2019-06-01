import { SELECT_IMAGE, DESELECT_IMAGE } from '../types';

const initialState = [
  {
    id: ''
  }
];

export const GalleryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return [
        ...state,
        {
          id: action.id
        }
      ];
    case DESELECT_IMAGE:
      return [
        {
          id: ''
        }
      ];
    default:
      return state;
  }
};
