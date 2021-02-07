import { SvelteComponentTyped} from 'svelte/internal';
import type { Align, Speed, Loading } from '../../variations';
import { Module } from '../module';
import Controller from './controller'
import {SearchSettings} from './settings'

declare type State = 'disabled';
interface SearchProps extends Module<Controller, SearchSettings> {
    fluid?: boolean;
    local?: boolean;
    category?: boolean;
    loading?: boolean;
    scrolling?: boolean;
    state?: State;
    aligned?: Align;
    speed?: Speed;
    animation?: Loading;
}
/**
 * Vomantic Search
 */
declare class Search extends SvelteComponentTyped<SearchProps> {
}
export default Search;
