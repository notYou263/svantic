import { default as Statistics } from './statistics.svelte'
import { default as Statistic } from './statistic.svelte'
import { default as Label } from './label.svelte'
import { default as Value } from './value.svelte'

export function init() {
    // @ts-ignore
    Statistic.Label = Label
    // @ts-ignore
    Statistic.Value = Value
    // @ts-ignore
    Statistic.Group = Statistics
}

export { Statistics as Group, Label, Value }
export default Statistic
