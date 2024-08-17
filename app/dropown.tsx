import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Dropown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Apenas um DropDown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>DropDown Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Inicio
          </DropdownMenuItem>
          <DropdownMenuItem>
            Clientes
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Serviços</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Desenvolvimento de Sites</DropdownMenuItem>
                <DropdownMenuItem>Criação de Newsletters</DropdownMenuItem>
                <DropdownMenuItem>Otimização de SEO</DropdownMenuItem>
                <DropdownMenuItem>Design Gráfico</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Sobre nós
          </DropdownMenuItem>
          <DropdownMenuItem>
            Contato
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
