import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export const BUTTON_STYLES =
    "bg-stz-primary text-white text-lg font-dm-sans py-2 px-5 rounded-full";

export function Button(props: TProps) {
    const [local, others] = splitProps(props, ["children", "type", "class"]);
    const resolved = children(() => local.children);

    return (
        <button class={clsx(local.class, BUTTON_STYLES)} {...others}>
            {resolved()}
        </button>
    );
}
