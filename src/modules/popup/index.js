import { default as Popup } from './popup.svelte'
import { default as Header } from './header.svelte'

export function init() {
    Popup.Header = Header
}

export { Header }
export default Popup