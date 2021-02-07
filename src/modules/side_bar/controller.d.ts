import type { SidebarSettings } from './settings'

import Controller from '../controller'

type SidebarBehavior =
  | 'attach events'
  | 'show'
  | 'hide'
  | 'toggle'
  | 'is visible'
  | 'is hidden'
  | 'push page'
  | 'get direction'
  | 'pull page'
  | 'add body CSS'
  | 'remove body CSS'
  | 'get transition event'
export default class ToastController extends Controller<
  SidebarBehavior,
  SidebarSettings
> {
  /**
   *@description 	Attaches sidebar action to given selector. Default event if none specified is toggle
   */
  attachEvents(selector: HTMLElement, event: any): void

  /**
   *@description 	Shows sidebar
   */
  show(): void

  /**
   *@description 	Hides sidebar
   */
  hide(): void

  /**
   *@description 	Toggles visibility of sidebar
   */
  toggle(): void

  /**
   *@description 	Returns whether sidebar is visible
   */
  isVisible(): Promise<boolean>

  /**
   *@description 	Returns whether sidebar is hidden
   */
  isHidden(): Promise<boolean>

  /**
   *@description 	Pushes page content to be visible alongside sidebar
   */
  pushPage(): void

  /**
   *@description 	Returns direction of current sidebar
   */
  getDirection(): Promise

  /**
   *@description 	Returns page content to original position
   */
  pullPage(): Promise

  /**
   *@description 	Adds stylesheet to page head to trigger sidebar animations
   */
  addBodyCSS(): void

  /**
   *@description 	Removes any inline stylesheets for sidebar animation
   */
  removeBodyCSS(): void

  /**
   *@description 	Returns vendor prefixed transition end event
   */
  getTransitionEvent(): Promise
}
