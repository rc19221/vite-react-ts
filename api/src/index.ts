import { app } from '@azure/functions';

app.setup({
    enableHttpStream: true,
});

app.http('helloworld', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        return {
            status: 200,
            body: JSON.stringify({ msg: 'Hello World!' })
        };      
    }
})