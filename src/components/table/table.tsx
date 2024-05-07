import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'> {

}

export function Table(props: TableProps) {
    return (
        <div className='border border-white/10 rounded-lg'>
            {/* <table className='w-full' {...props} /> Posso também passar deste modo, pois aqui o children tb está sendo enviado como uma propriedade  */}
            <table className="w-full" {...props}>
                {props.children}
            </table>
        </div>
    )
}