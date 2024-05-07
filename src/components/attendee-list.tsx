import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'

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

            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th className='w-12 py-3 px-4 text-sm font-semibold text-left'>
                                {/* <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' /> */}
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-400 bg-black/20 rounded border border-white/10 focus:border-orange-400 focus:ring-orange-400 focus:ring-0 checked:border-orange-400" />
                            </th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
                            <th className='w-16 py-3 px-4 text-sm font-semibold text-left'></th>
                            {/* <th style={{ width: 64 }} className='py-3 px-4 text-sm font-semibold text-left'></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10}).map((_, i) => {
                          return (
                            <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                                <td className='py-3 px-4 text-sm text-zinc-400'>
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-400 bg-black/20 rounded border border-white/10 focus:border-orange-400 focus:ring-orange-400 focus:ring-0 checked:border-orange-400" />
                                </td>
                                <td className='py-3 px-4 text-sm text-zinc-400'>123456</td>
                                <td className='py-3 px-4 text-sm text-zinc-400'>
                                    <div className='flex flex-col gap-1'>
                                        <span className='font-semibold text-white'>Maria Tcha Tcha Tcha</span>
                                        <span>maria@mail.com</span>
                                    </div>
                                </td>
                                <td className='py-3 px-4 text-sm text-zinc-400'>7 dias atrás</td>
                                <td className='py-3 px-4 text-sm text-zinc-400'>4 dias atrás</td>
                                <td className='py-3 px-4 text-sm text-zinc-400'>
                                    <IconButton transparent>
                                        <MoreHorizontal className='size-4' />
                                    </IconButton>
                                </td>
                            </tr>
                          )  
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='py-3 px-4 text-sm text-zinc-400' colSpan={3}>
                                Mostrando 10 de 228 itens
                            </td>
                            <td className='py-3 px-4 text-sm text-zinc-400 text-right' colSpan={3}>
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
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}