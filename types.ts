import {ProgressType} from "./constants";
import type {IAbilitiesKit, IAbilityProps} from "@visualkit/core";


export type IProgress = IProgressProps & IAbilityProps<IProgressProps, IProgressAbility>;

export type IProgressProps = {
  type?: ProgressType;
  min?: number;
  max?: number;
  value?: number;
  label?: string;
}

export type IProgressEvents = {
  seeking: number;
}

export interface IProgressAbility extends IAbilitiesKit<IProgressProps>{

}