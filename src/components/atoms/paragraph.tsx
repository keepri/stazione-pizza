import { clsx } from "clsx";
import { ParentProps, children, splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLParagraphElement>;

export function P(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => props.children);

    return (
        <p
            class={clsx(local.class, "max-w-prose font-dm-sans text-stz-dark")}
            {...others}
        >
            {resolved()}
        </p>
    );
}
