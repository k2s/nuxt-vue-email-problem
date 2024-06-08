import {useCompiler} from "#vue-email";

export default defineEventHandler(async (event) => {
    const template = await useCompiler('BadEmail.vue', {
        props: {
            // ...props,
            // data: formData,
        }
    })

    return template.html
})
