import { Request, Response } from 'express'
import { estados } from "../database/estadosFakeDb"

export const getAll = (req: Request, res: Response) => {
  let resultados = estados

  //filter by name (query param: ?nome=paulo)
  const nome = req.query.nome?.toString().toLocaleLowerCase()
  if(nome)
  {
    resultados = resultados.filter(estado => estado.nome.toLocaleLowerCase().includes(nome))
  }

  //filter by region
  const regiao = req.query.regiao?.toString().toLocaleUpperCase()
  if(regiao){
    resultados = resultados.filter(estado => estado.regiao?.toUpperCase() === regiao)
  }

  //filter by min PIB
  const pibMin = parseFloat(req.query.pibMin as string)
  if(!isNaN(pibMin)){
    resultados = resultados.filter(estado => estado.pib >= pibMin)
  }

  const pibMax = parseFloat(req.query.pibMax as string)
  if(!isNaN(pibMax))
  {
    resultados = resultados.filter(estado => estado.pib <= pibMax)
  }

  //pagination
  const pagina = parseInt(req.query.pagina as string) || 1
  const limite = parseInt(req.query.limite as string) || 10

  const inicio = (pagina - 1) * limite
  const fim = inicio + limite
  
  const paginados = resultados.slice(inicio, fim)

  res.json({
    pagina,
    limite,
    total: resultados.length,
    resultados: paginados
  })

}

export const getBySigla = (req: Request, res: Response) => {
  
  const sigla = req.params.sigla.toLocaleUpperCase()
  const estado = estados.find(e=>e.sigla.toUpperCase() == sigla)

  
  if (!estado) {
    return res.status(404).json({ mensagem: "Estado não encontrado" })
  }
  res.status(200).json(estado)
}

export const create = (req:Request, res:Response) => res.json({message: "create"})
export const update = (req:Request, res:Response) => res.json({message: "update"})
export const remove = (req:Request, res:Response) => res.json({message: "remove"})