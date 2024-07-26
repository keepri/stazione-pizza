import clsx from "clsx";
import { JSX, ParentProps, children, splitProps } from "solid-js";

type Props = ParentProps & JSX.HTMLAttributes<HTMLElement>;

export function Section(props: Props) {
    const [local, others] = splitProps(props, ["children", "class"]);
    const resolved = children(() => local.children);

    return (
        <section class={clsx("container py-20", local.class)} {...others}>
            {resolved()}
        </section>
    );
}
