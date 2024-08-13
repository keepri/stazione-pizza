import { clsx } from "clsx";

import FacebookSvg from "../../assets/icons/socials/facebook.svg";
import InstagramSvg from "../../assets/icons/socials/instagram.svg";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../../data/company-info";
import { DEFAULT_ICON_SIZE, STZ_DARK } from "../../utils/constants";
import { Link } from "./link";

export type TSocialLink = "instagram" | "facebook";
type TProps = {
    variant: TSocialLink;
    class?: string;
};

export function SocialLink(props: TProps) {
    const className = clsx(
        props.class,
        "flex items-center gap-2 text-lg hover:underline",
    );

    switch (props.variant) {
        case "instagram":
            return (
                <Link class={className} href={INSTAGRAM_LINK} target="_blank">
                    <InstagramSvg
                        width={DEFAULT_ICON_SIZE}
                        height={DEFAULT_ICON_SIZE}
                        fill={STZ_DARK}
                    />
                    Instagram
                </Link>
            );

        case "facebook":
            return (
                <Link class={className} href={FACEBOOK_LINK} target="_blank">
                    <FacebookSvg
                        width={DEFAULT_ICON_SIZE}
                        height={DEFAULT_ICON_SIZE}
                        fill={STZ_DARK}
                    />
                    Facebook
                </Link>
            );

        default:
            return;
    }
}
