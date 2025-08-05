import { navItem } from "@/app/(utilities)/NavItems";
import { ReactNode } from "react";

interface HeaderLinkType {
    initialItem: navItem | any;
    navSelect?: (item?: navItem | undefined) => void;
    classNames: (...classes: string[]) => string;
    clickFunction?: () => void;
}

function isNavItem(value: any): value is navItem {
    return (
        typeof value.name === "string" &&
        typeof value.href === "string" &&
        typeof value.current === "boolean"
    );
}

export default function HeaderLink({
    initialItem,
    navSelect,
    classNames,
    clickFunction,
}: HeaderLinkType): ReactNode {
    let item = initialItem;
    if (isNavItem(initialItem)) {
        if (typeof location != "undefined" && initialItem.href.includes("#")) {
            item = { ...initialItem, href: location.origin + item.href };
            // item.href = location.origin + item.href;
            console.log("xx " + item.href);
        }
        return (
            isNavItem(item) && (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => {
                        navSelect && navSelect(item);
                    }}
                >
                    {item.name}
                </a>
            )
        );
    }

    return (
        <button
            type="button"
            key={item.name}
            // href={item.href}
            className={classNames(
                // item.current
                //     ? "bg-gray-900 text-white"
                //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
            )}
            // aria-current={item.current ? "page" : undefined}
            onClick={() => {
                clickFunction && clickFunction();
            }}
        >
            {item.name}
        </button>
    );
}
