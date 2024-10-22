import "../appearance.scss"
import {type IWidget, Widget} from "@protorians/widgets";
import {
  Capability,
  CapabilityKit,
  defineKit,
  type ICapabilityPayload,
  type KitSchematic,
  type KitWidget,
  useKit
} from "@visualkit/core";
import type {IProgress, IProgressCapability, IProgressProps} from "./types";
import {ProgressType} from "./constants";

const Identifier: string = "progress";
const Schematic: KitSchematic<IProgress> = {
  tag: 'div',
  identifier: Identifier,
  main: (props): KitWidget => {
    const capability = ProgressCapability.context(props) as IProgressCapability;
    return {
      // className: `${Identifier}:${props.type}`,
      children: getProgressType(props.type || ProgressType.Bar, capability),
      signal: {
        mount({}) {
          capability.set('value', props.value || 0)
        }
      }
    }
  },

}

const ProgressKit = (props: IProgress) => {
  return useKit<IProgress>(Identifier, props);
}

class ProgressCapability extends CapabilityKit<IProgressProps> implements IProgressCapability {

  @Capability()
  static value({value, widget, props}: ICapabilityPayload<number, IProgressProps>) {
    props.min = props.min || 0;
    const percent = (value / (props.max || 1)) * 100;
    widget.style({
      width: `${percent > 100 ? 100 : (percent < props.min ? props.min : percent.toFixed(1))}%`,
    })
  }

}

defineKit<IProgress>(Schematic)


function getProgressType(type: ProgressType, capability: IProgressCapability) {

  switch (type) {

    case ProgressType.Bounce:
      return ProgressBounce(capability)

    case ProgressType.Circle:
      return ProgressCircle(capability)

    case ProgressType.Dots:
      return ProgressDots(capability)

    case ProgressType.Message:
      return ProgressMessage(capability)

    case ProgressType.Morphic:
      return ProgressMorphic(capability)

    case ProgressType.Percent:
      return ProgressPercent(capability)

    case ProgressType.Pulse:
      return ProgressPulse(capability)

    case ProgressType.Rotate:
      return ProgressRotate(capability)

    case ProgressType.Skeleton:
      return ProgressSkeleton(capability)

    case ProgressType.Spinner:
      return ProgressSpinner(capability)

    case ProgressType.Square:
      return ProgressSquare(capability)

    default:
      return ProgressBar(capability)
  }

}

function ProgressBar(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:bar`,
    children: [
      Widget({
        className: `${Identifier}:track`,
        children: [],
      }).manipulate(({widget}) => {
        if (widget) capability.bind('value', widget)
      }),
    ]
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressDots(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:dots`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressSkeleton(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:skeleton`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressSpinner(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:spinner`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressCircle(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:circle`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressRotate(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:rotate`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressMessage(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:message`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressPercent(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:percent`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressPulse(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:pulse`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressBounce(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:bounce`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressSquare(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:square`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}

function ProgressMorphic(capability: IProgressCapability): IWidget<any, any> {
  return Widget({
    className: `${Identifier}:morphic`,
    children: []
  }).manipulate(({widget}) => {
    if (widget) capability.bind('type', widget)
  })
}


export {
  Identifier,
  Schematic,
  ProgressCapability,
  ProgressKit,
  ProgressBar,
  ProgressSpinner,
  ProgressCircle,
  ProgressRotate,
  ProgressSquare,
  ProgressMessage,
  ProgressPercent,
  ProgressPulse,
  ProgressBounce,
  ProgressMorphic
}
