import {ProgressType} from "./constants";
import type {ICapabilityKit, ICapabilityProps} from "@visualkit/core";


export type IProgress = IProgressProps & ICapabilityProps<IProgressProps, IProgressCapability>;

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

export interface IProgressCapability extends ICapabilityKit<IProgressProps>{

}