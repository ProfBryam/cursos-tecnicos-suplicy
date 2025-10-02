import IconEletro from './../assets/img/iconEletro.png';
import IconDev from './../assets/img/iconDev.png';
import IconMark from './../assets/img/iconMark.png';

import ImgSistemas from './../assets/img/sistemas.jpeg';
import ImgEletro from './../assets/img/eletro.jpeg';
import ImgMarketing from './../assets/img/marketing.jpeg';


export const cursosDatas = [
    {
        titulo: 'ELETROMECÂNICA',
        descricao: 'Curso técnico que forma profissionais para atuar na manutenção e operação de equipamentos eletromecânicos.',
        conteudos: [
            'Elétrica Industrial',
            'Mecânica Aplicada',
            'Automação Industrial',
            'Comandos Elétricos',
            'Pneumática e Hidráulica',
            'Segurança do Trabalho',
        ],
        trabalhos: [
            'Indústrias de Manufatura',
            'Empresas de Manutenção',
            'Setor Automotivo',
            'Empresas de Energia',
            'Consultoria Técnica',
        ],
        galeria: ImgEletro,
        linkGaleria: 'https://imgur.com/gallery/eletromec-nica-QuW7mYj',
        icone: IconEletro,
    },
    {
        titulo: 'DESENVOLVIMENTO DE SISTEMAS',
        descricao: 'Curso técnico focado no desenvolvimento de software e sistemas computacionais.',
        conteudos: [
            'Programação Web',
            'Banco de Dados',
            'Análise de Sistemas',
            'Desenvolvimento Mobile',
            'Redes de Computadores',
            'Segurança da Informação',
        ],
        trabalhos: [
            'Analista de TI',
            'Desenvolvedor Web',
            'Desenvolvedor Mobile',
            'Suporte Técnico',
            'Desenvolvedor BackEnd',
        ],
        galeria: ImgSistemas,
        linkGaleria: 'https://imgur.com/gallery/sistemas-5RbnIjv',
        icone: IconDev,
    },
    {
        titulo: 'MARKETING',
        descricao: 'Curso técnico que prepara profissionais para atuar no mercado publicitário e de marketing digital.',
        conteudos: [
            'Marketing Digital',
            'Publicidade e Propaganda',
            'Redes Sociais',
            'E-commerce',
            'Pesquisa de Mercado',
            'Comunicação Visual',
        ],
        trabalhos: [
            'Agências de Publicidade',
            'Marketing Digital',
            'E-commerce',
            'Comunicação Empresarial',
            'Consultoria em Marketing',
        ],
        galeria: ImgMarketing,
        linkGaleria: 'https://imgur.com/gallery/marketing-pQLmrrf',
        icone: IconMark,
    }
]