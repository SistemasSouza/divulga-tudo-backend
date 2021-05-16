const knex = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { cliente_id, data_inicio, data_termino } = request.params;

        const anuncios = await knex('anuncios')
                                .where({cliente_id })
                                .join('clientes', 'clientes.id', '=', 'anuncios.cliente_id')
                                .select('anuncios.*', 'clientes.nome as cliente');

        //AQUI VC VAI PRECISAR PECORRER OS ANUNCIOS E APLICAR O ALGORITMO EM CIMA DE CADA UM

        return response.json(anuncios);
    },
}