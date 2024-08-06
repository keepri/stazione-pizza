import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLElement>;

export function Section(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <section
            class={clsx(local.class, "container pb-8 pt-8 sm:pb-16 sm:pt-16")}
            {...others}
        >
            {resolved()}
        </section>
    );
}
