<script>
    let baseUrl = '',
          imgUrl = ''

    if(process.env.NODE_ENV == 'production'){
        baseUrl = 'www.ccc.com',
        imgUrl = 'www.198898.com'
    } else if (process.env.NODE_ENV == 'development') {
        baseUrl = 'www.xxx.com',
        imgUrl = '/static/img/'
    }

    export default
    {
        baseUrl,
        imgUrl
    }
</script>