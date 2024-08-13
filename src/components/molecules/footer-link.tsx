import { AnchorProps } from "@solidjs/router";
import { Component, JSX, ParentProps } from "solid-js";

import { DEFAULT_ICON_SIZE, STZ_LIGHT } from "../../utils/constants";
import { Link } from "../atoms/link";

export type TProps = ParentProps & {
    href: AnchorProps["href"];
    newTab?: boolean;
    isPhone?: boolean;
    icon?: string | Component<JSX.SvgSVGAttributes<SVGSVGElement>>;
};

export function FooterLink(props: TProps) {
    const Icon = renderIcon(props);

    return (
        <li class={props.icon ? "flex items-center gap-2" : undefined}>
            {Icon}
            <Link
                showActive
                class="hover:underline"
                href={props.href}
                target={props.newTab ? "_blank" : undefined}
            >
                {props.children}
            </Link>
        </li>
    );
}

function renderIcon(props: TProps) {
    let Icon;

    if (props.icon) {
        switch (typeof props.icon) {
            case "string":
                Icon = (
                    <img
                        width={DEFAULT_ICON_SIZE}
                        height={DEFAULT_ICON_SIZE}
                        src={props.icon}
                    />
                );
                break;

            case "function":
                Icon = (
                    <props.icon
                        width={DEFAULT_ICON_SIZE}
                        height={DEFAULT_ICON_SIZE}
                        fill={STZ_LIGHT}
                    />
                );
                break;
        }
    }

    return Icon;
}
