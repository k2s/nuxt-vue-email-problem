import {useCompiler} from "#vue-email";

export default defineEventHandler(async (event) => {
    const template = await useCompiler('OkEmail.vue', {
        props: {
            // ...props,
            // data: formData,
        }
    })

    return template.html
})
