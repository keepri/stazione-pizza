import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLHeadingElement>;

export function H4(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <h4
            class={clsx(
                "font-extrabold sm:text-3xl text-xl text-stz-primary",
                local.class,
            )}
            {...others}
        >
            {resolved()}
        </h4>
    );
}
