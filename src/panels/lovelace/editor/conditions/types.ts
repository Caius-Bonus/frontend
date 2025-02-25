import { Condition } from "../../common/validate-condition";

export interface LovelaceConditionEditorConstructor {
  defaultConfig?: Condition;
  validateUIConfig?: (condition: Condition) => boolean;
}
