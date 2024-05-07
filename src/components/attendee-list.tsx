import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                    <Search className='size-4 text-orange-300'/>
                    <input className="bg-transparent flex-1 border-0 p-0 text-sm focus:outline-none focus:ring-0" placeholder="Buscar participantes..." type="text" />
                </div>
            </div>

            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader setWidth={'48'}>
                            {/* <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' /> */}
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-400 bg-black/20 rounded border border-white/10 focus:border-orange-400 focus:ring-orange-400 focus:ring-0 checked:border-orange-400" />
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do check-in</TableHeader>
                        <TableHeader setWidth={'64'} ></TableHeader>
                        {/* <th style={{ width: 64 }} className='py-3 px-4 text-sm font-semibold text-left'></th> */}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 10}).map((_, i) => {
                        return (
                        <TableRow key={i} >
                            <TableCell>
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-400 bg-black/20 rounded border border-white/10 focus:border-orange-400 focus:ring-orange-400 focus:ring-0 checked:border-orange-400" />
                            </TableCell>
                            <TableCell>123456</TableCell>
                            <TableCell>
                                <div className='flex flex-col gap-1'>
                                    <span className='font-semibold text-white'>Maria Tcha Tcha Tcha</span>
                                    <span>maria@mail.com</span>
                                </div>
                            </TableCell>
                            <TableCell>7 dias atrás</TableCell>
                            <TableCell>4 dias atrás</TableCell>
                            <TableCell>
                                <IconButton transparent>
                                    <MoreHorizontal className='size-4' />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        )  
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>
                            Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell className='text-right' colSpan={3}>
                            <div className='inline-flex items-center gap-8'>

                                <span>Página 1 de 23</span>

                                <div className='flex gap-1.5'>
                                    <IconButton>
                                        <ChevronsLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronLeft className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronRight className='size-4' />
                                    </IconButton>
                                    <IconButton>
                                        <ChevronsRight className='size-4' />
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}