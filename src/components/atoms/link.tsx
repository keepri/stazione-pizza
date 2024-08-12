import { A, AnchorProps } from "@solidjs/router";
import clsx from "clsx";
import { ParentProps, children, splitProps } from "solid-js";

type TProps = ParentProps &
    AnchorProps & {
        showActive?: boolean;
        underline?: boolean;
    };

export function Link(props: TProps) {
    const [local, others] = splitProps(props, [
        "children",
        "class",
        "href",
        "showActive",
    ]);
    const resolved = children(() => local.children);
    const className = clsx(local.class, "font-dm-sans");

    if (local.href.startsWith("tel:+")) {
        return (
            <a href={local.href} class={className}>
                {resolved()}
            </a>
        );
    }

    return (
        <A
            activeClass={
                local.showActive ? "underline underline-offset-4" : undefined
            }
            end={true}
            href={local.href}
            class={className}
            {...others}
        >
            {resolved()}
        </A>
    );
}
