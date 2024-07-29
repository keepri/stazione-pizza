import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLElement>;

export function Section(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <section
            class={clsx("container max-sm:py-14 py-20", local.class)}
            {...others}
        >
            {resolved()}
        </section>
    );
}
