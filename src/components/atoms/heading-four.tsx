import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLHeadingElement>;

export function H4(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <h4
            class={clsx(
                local.class,
                "text-3xl font-extrabold text-stz-primary",
            )}
            {...others}
        >
            {resolved()}
        </h4>
    );
}
