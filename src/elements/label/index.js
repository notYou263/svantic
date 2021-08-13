import { default as Label } from './label.svelte'
import { default as Tag } from './tag.svelte'
import { default as Ribbon } from './ribbon.svelte'
import { default as Link } from './link.svelte'
import { default as Detail } from './detail.svelte'
import { default as Group } from './labels.svelte'

export function init() {
    Label.Tag = Tag
    Label.Ribbon = Ribbon
    Label.Link = Link
    Label.Detail = Detail
    Label.Group = Group
}

export { Group, Tag, Link, Ribbon, Detail }
export default Label
