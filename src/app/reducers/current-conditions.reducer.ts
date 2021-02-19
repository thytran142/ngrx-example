import {CurrentConditionActions, CurrentConditionActionTypes} from "../actions/current-condition.actions";

export interface CurrentConditionsState {
    currentConditions: Map<String, any>;
}
export const initialState: CurrentConditionsState = {
    currentConditions: new Map()
};
export function currentConditionsReducer(state = initialState, action: CurrentConditionActions): CurrentConditionsState {
    switch(action.type) {
        case CurrentConditionActionTypes.CurrentConditionsLoaded:
            const cc = new Map(state.currentConditions);
            cc.set(action.zipcode, action.conditions);
            return {...state, currentConditions: cc};
        default:
            return state;
    }
}
