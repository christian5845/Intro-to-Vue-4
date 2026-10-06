const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.google.com/search?sca_esv=bb28770a960d316c&sxsrf=APpeQnsZqpjHIv806Rp1L-xmsCl2unSz8Q:1791188186956&udm=2&fbs=ABfTbFUyxjQn9bne4DuflY2dNqqKbhdxSO8WgvTBi3efK56712C8W5mda81K3GEb1ys9Gx-KPZkH_j6DTB99QZsTo1P69W8x6lKj3JedctAzT9KX4wdUkRPWkTle425nIe8gSfJmhjTyqfV3wmhL0XMvKRHGUtlxiJn12tGkOwJefmFwANT9ktjkiazLDDnywEi5UUS_Ljfk&q=google+socks&sa=X&ved=2ahUKEwi7ye_8t6KXAxWKR_EDHZTZBkoQtKgLegQIFxAB&biw=1536&bih=833&dpr=2',
            inventory: 100,
            onSale: true
        }
    }
})
