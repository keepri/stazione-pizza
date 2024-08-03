import { ParentProps, children } from "solid-js";

// TODO make this into a svg component
import logoUrl from "../../assets/logo.svg?url";
import { Link } from "./link";

type TSize = "lg" | "xl";

type TProps = ParentProps & {
    size?: TSize;
    href?: string;
};

const sizes: Record<TSize, string> = {
    lg: "w-28 h-28",
    xl: "w-40 h-40",
} as const;

export function Logo(props: TProps) {
    props.size ??= "lg";

    const size = sizes[props.size];
    const containerStyles = "flex gap-5 justify-between items-center flex-wrap";

    const logo = (
        <img
            class={`${size} rounded-full bg-transparent`}
            src={logoUrl}
            alt="Stazione logo"
        />
    );

    if (props.href) {
        return (
            <Link href={props.href} class={containerStyles}>
                {logo}
                {props.children}
            </Link>
        );
    }

    const resolved = children(() => props.children);

    return (
        <span class={containerStyles}>
            {logo}
            {resolved()}
        </span>
    );
}
