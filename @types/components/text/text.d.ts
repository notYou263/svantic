import { SvelteComponentTyped} from 'svelte/internal';
import { Style } from '../../style';
import { SharedProps } from '../../shared_props';
interface TextProps extends SharedProps {
    class?: string;
    active?: boolean;
    disabled?: boolean;
    fluid?: boolean;
    circular?: boolean;
    loading?: boolean;
    primary?: boolean;
    secondary?: boolean;
    compact?: boolean;
    basic?: boolean;
    toggle?: boolean;
    positive?: boolean;
    negative?: boolean;
    tertiary?: boolean;
    inverted?: boolean;
    icon?: boolean;
    style?: Style;
}
/**
 * Sveltic Text
 */
declare class Text extends SvelteComponentTyped<TextProps> {
}
export default Text;
