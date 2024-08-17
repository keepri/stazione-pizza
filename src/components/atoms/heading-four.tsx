import clsx from "clsx";
import { JSX, ParentProps, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLHeadingElement>;

export function H4(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);

    return (
        <h4
            class={clsx(
                local.class,
                "text-2xl font-extrabold text-stz-primary sm:text-4xl",
            )}
            {...others}
        >
            {local.children}
        </h4>
    );
}
