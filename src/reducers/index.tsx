import { combineReducers } from 'redux'

import { GalleryReducer } from './galleryReducer'
import { EffectReducer } from './effectReducer'

export default combineReducers({
    gallery: GalleryReducer,
    effect: EffectReducer,
})
