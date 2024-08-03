import { clsx } from "clsx";
import { ParentProps, children } from "solid-js";

type TProps = ParentProps & {
    side?: "left" | "right";
};

export function PageTitle(props: TProps) {
    props.side ??= "left";

    const resolved = children(() => props.children);

    const isLeft = props.side === "left";
    const isRight = props.side === "right";

    return (
        <div class="container flex items-center justify-between py-8 sm:py-14">
            <h1
                class={clsx(
                    "text-6xl font-extrabold text-stz-dark sm:whitespace-nowrap md:text-8xl",
                    isRight && "order-2",
                    isLeft && "order-1",
                )}
            >
                {resolved()}
            </h1>
            <div
                class={clsx(
                    "h-16 w-full bg-stz-primary",
                    isRight &&
                        "order-1 -translate-x-16 sm:-translate-x-[132px]",
                    isLeft && "order-2 translate-x-16 sm:translate-x-[132px]",
                )}
            />
        </div>
    );
}
