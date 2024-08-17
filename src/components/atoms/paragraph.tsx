import { clsx } from "clsx";
import { ParentProps, splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

type TProps = ParentProps & JSX.HTMLAttributes<HTMLParagraphElement>;

export function P(props: TProps) {
    const [local, others] = splitProps(props, ["children", "class"]);

    return (
        <p
            class={clsx(
                local.class,
                "max-w-[55ch] font-dm-sans text-stz-dark sm:text-lg",
            )}
            {...others}
        >
            {local.children}
        </p>
    );
}
