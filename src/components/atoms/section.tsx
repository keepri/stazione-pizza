import clsx from "clsx";
import { JSX, ParentProps, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLElement>;

export function Section(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);

    return (
        <section
            class={clsx(local.class, "container pb-8 pt-8 sm:pb-16 sm:pt-16")}
            {...others}
        >
            {local.children}
        </section>
    );
}
