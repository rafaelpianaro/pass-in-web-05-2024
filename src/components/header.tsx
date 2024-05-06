import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
	return (
		<div className='flex items-center gap-5 py-2'>
			<img src={nlwUniteIcon} alt="Logotipo com imagem do nlw unite" />
			<nav className='flex items-center gap-5'>
				{/* <a className='font-medium text-sm text-zinc-400' href="#">Eventos</a> */}
				<NavLink title='Link para acessar eventos.' href='/eventos'>Eventos</NavLink>
				<NavLink href='/participantes'>Participantes</NavLink>
				<NavLink>Outro link</NavLink>
			</nav>
		</div>
	)
}