import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLElement>;

export function Section(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <section
            class={clsx("container sm:py-20 py-8", local.class)}
            {...others}
        >
            {resolved()}
        </section>
    );
}
