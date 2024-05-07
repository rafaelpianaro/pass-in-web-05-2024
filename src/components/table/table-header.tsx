import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> {
    setWidth?: string
}

export function TableHeader({setWidth, ...props}: TableHeaderProps) {

    const baseClasses = "py-3 px-4 text-sm font-semibold text-left";
    // if `setWidth` was given
    const className = setWidth ? `${baseClasses} w-[${setWidth}]` : baseClasses;

    return (
        <th {...props} className={className} />
    )
}