import type { HttpContext } from '@adonisjs/core/http'

export default class PeladasController {
    async index(ctx: HttpContext) {
        return [
            {
                "id": 1,
                "nome": "Pelada da Segunda",
                "data": "01/01/2024",
                "horaInicio": "19:00h",
                "horaFim": "20:30h",
            },
            {
                "id": 2,
                "nome": "Pelada da Segunda",
                "data": "01/01/2024",
                "horaInicio": "19:00h",
                "horaFim": "20:30h",
            }
        ]
    }
}