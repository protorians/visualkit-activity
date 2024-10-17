import "./index.scss"
import {
  defineKit,
  useKit,
  type KitSchematic,
  type KitWidget,
  AbilitiesKit,
  Ability,
  IKitAbilityPayload
} from "@visualkit/core";
import {Widget} from "@protorians/widgets";
import type {IProgress, IProgressAbility, IProgressProps} from "./types";

const Identifier: string = "progress";
const Schematic: KitSchematic<IProgress> = {
  tag: 'div',
  identifier: Identifier,
  main: (props): KitWidget => {
    const ability = ProgressAbility.context(props) as IProgressAbility;
    return {
      className: `${Identifier}:bar`,

      children: Widget({
        className: `${Identifier}:track`,
        children: []
      }).manipulate(({widget}) => {
        if (widget) ability
          .bind('value', widget)
      }),

      signal: {
        mount({}) {
          ability.property.state.min = props.value || 0;
        }
      }

    }
  },

}

class ProgressAbility extends AbilitiesKit<IProgressProps> implements IProgressAbility {

  @Ability()
  static value({value, widget, props}: IKitAbilityPayload<number, IProgressProps>) {
    const percent = (value / (props.max || 1)) * 100;
    widget.style({
      width: `${percent > 100 ? 100 : (percent < 0 ? 0 : percent.toFixed(1))}%`,
    })
  }

}

const ProgressKit = (props: IProgress) => {
  return useKit<IProgress>(Identifier, props);
}



defineKit<IProgress>(Schematic)

export {
  Identifier,
  Schematic,
  ProgressAbility,
  ProgressKit
}
