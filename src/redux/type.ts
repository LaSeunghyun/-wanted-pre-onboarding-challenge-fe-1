import { ActionType } from 'typesafe-actions';
import * as action from './action';

export type TodoAction = ActionType<typeof action>;

export type Todo = {
    todo : Object
}