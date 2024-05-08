import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
    // Extrai `disabled` das props para usar na lógica de estilo
    const { disabled } = props;

    const baseStyle = 'border rounded-md p-1.5';
    const enabledStyle = transparent
        ? 'bg-black/20 border-white/10'
        : 'bg-white/10 border-white/10';
    const disabledStyle = 'bg-gray-400 text-gray-800 cursor-not-allowed';

    // Define a classe do botão com base no estado disabled
    const buttonClass = `${baseStyle} ${disabled ? disabledStyle : enabledStyle}`;

    return (
        <button
            {...props}
            className={buttonClass}
        />
    );
}
