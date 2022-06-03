import { createStore } from 'redux'
import uiReducer, {initionalState} from './Reducer/ui'

export function configureStore(){
    return createStore(uiReducer, initionalState)
}